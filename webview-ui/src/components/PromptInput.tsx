import { useState, useEffect, useRef, useCallback } from 'react'
import type { ToolActivity } from '../office/types.js'
import type { OfficeState } from '../office/engine/officeState.js'
import { TILE_SIZE, CharacterState } from '../office/types.js'
import {
  TOOL_OVERLAY_VERTICAL_OFFSET,
  CHARACTER_SITTING_OFFSET_PX,
  PROMPT_INPUT_WIDTH,
  PROMPT_INPUT_GAP_PX,
  PROMPT_SEND_DEBOUNCE_MS,
} from '../constants.js'
import { vscode } from '../vscodeApi.js'

interface PromptInputProps {
  officeState: OfficeState
  agentTools: Record<number, ToolActivity[]>
  agentStatuses: Record<number, string>
  containerRef: React.RefObject<HTMLDivElement | null>
  zoom: number
  panRef: React.RefObject<{ x: number; y: number }>
  isEditMode: boolean
}

export function PromptInput({
  officeState,
  agentTools,
  agentStatuses,
  containerRef,
  zoom,
  panRef,
  isEditMode,
}: PromptInputProps) {
  const [inputValue, setInputValue] = useState('')
  const [sending, setSending] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [, setTick] = useState(0)

  // Track which agent the input is shown for, to clear text on agent change
  const lastAgentIdRef = useRef<number | null>(null)

  const selectedId = officeState.selectedAgentId

  // Clear input when selected agent changes
  useEffect(() => {
    if (selectedId !== lastAgentIdRef.current) {
      lastAgentIdRef.current = selectedId
      setInputValue('')
    }
  }, [selectedId])

  // Position tracking via rAF — update DOM directly to avoid re-renders
  useEffect(() => {
    let rafId = 0
    const tick = () => {
      setTick((n) => n + 1)
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const handleSend = useCallback(() => {
    const id = officeState.selectedAgentId
    const text = inputValue.trim()
    if (!id || !text || sending) return
    vscode.postMessage({ type: 'promptAgent', id, text })
    setInputValue('')
    setSending(true)
    setTimeout(() => setSending(false), PROMPT_SEND_DEBOUNCE_MS)
  }, [officeState.selectedAgentId, inputValue, sending])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    } else if (e.key === 'Escape') {
      inputRef.current?.blur()
    }
  }, [handleSend])

  const stopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation()
  }, [])

  // Determine visibility
  if (!selectedId || selectedId < 0 || isEditMode) return null

  const ch = officeState.characters.get(selectedId)
  if (!ch || ch.isSubagent) return null

  // Compute position (same math as ToolOverlay)
  const el = containerRef.current
  if (!el) return null
  const rect = el.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  const canvasW = Math.round(rect.width * dpr)
  const canvasH = Math.round(rect.height * dpr)
  const layout = officeState.getLayout()
  const mapW = layout.cols * TILE_SIZE * zoom
  const mapH = layout.rows * TILE_SIZE * zoom
  const deviceOffsetX = Math.floor((canvasW - mapW) / 2) + Math.round(panRef.current.x)
  const deviceOffsetY = Math.floor((canvasH - mapH) / 2) + Math.round(panRef.current.y)

  const sittingOffset = ch.state === CharacterState.TYPE ? CHARACTER_SITTING_OFFSET_PX : 0
  const screenX = (deviceOffsetX + ch.x * zoom) / dpr
  const screenY = (deviceOffsetY + (ch.y + sittingOffset - TOOL_OVERLAY_VERTICAL_OFFSET) * zoom) / dpr

  // Determine status hint
  const tools = agentTools[selectedId]
  const hasActiveTools = tools?.some((t) => !t.done)
  const status = agentStatuses[selectedId]
  const isWaiting = status === 'waiting'

  let placeholder = 'Send a prompt...'
  if (hasActiveTools) {
    placeholder = 'Agent is working... type ahead'
  } else if (isWaiting) {
    placeholder = 'Agent is waiting, send a prompt...'
  }

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'absolute',
        left: screenX,
        top: screenY + PROMPT_INPUT_GAP_PX,
        transform: 'translateX(-50%)',
        zIndex: 'var(--pixel-overlay-selected-z)',
        pointerEvents: 'auto',
      }}
      onMouseDown={stopPropagation}
      onClick={stopPropagation}
      onPointerDown={stopPropagation}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--pixel-bg)',
          border: '2px solid var(--pixel-agent-border)',
          borderRadius: 0,
          boxShadow: 'var(--pixel-shadow)',
          width: PROMPT_INPUT_WIDTH,
          padding: '3px 4px',
          gap: 4,
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onMouseDown={stopPropagation}
          onClick={stopPropagation}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--pixel-agent-text)',
            fontSize: '20px',
            fontFamily: 'inherit',
            padding: '2px 4px',
            minWidth: 0,
          }}
        />
        <button
          onClick={handleSend}
          disabled={sending || !inputValue.trim()}
          title="Send prompt (Enter)"
          style={{
            background: inputValue.trim()
              ? 'var(--pixel-agent-bg)'
              : 'var(--pixel-btn-bg)',
            border: inputValue.trim()
              ? '2px solid var(--pixel-agent-border)'
              : '2px solid transparent',
            borderRadius: 0,
            color: inputValue.trim()
              ? 'var(--pixel-agent-text)'
              : 'var(--pixel-text-dim)',
            cursor: inputValue.trim() ? 'pointer' : 'default',
            padding: '2px 8px',
            fontSize: '20px',
            lineHeight: 1,
            flexShrink: 0,
            opacity: sending ? 'var(--pixel-btn-disabled-opacity)' : 1,
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}
