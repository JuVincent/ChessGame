<script lang="ts" setup>
import { ChessCoordinate } from '~/model/chesspiece'

const props = defineProps<{
  x: string
  y: number
  isDark: boolean
}>()

const chessGameStore = useChessGameStore()

const coordinate = new ChessCoordinate(props.x, props.y)
const piece = computedEager(() => chessGameStore.getPiece(coordinate))

const onDrop = ($event: Event) => {
}
</script>

<template>
  <div
    class="flex w-20 h-20 gap-0 justify-center items-center"
    :class="isDark ? 'bg-gray' : 'bg-light'"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <ChessboardPiece v-if="piece != null" :piece="piece" />
  </div>
</template>
