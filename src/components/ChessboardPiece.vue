<script lang="ts" setup>
import type { IChessPiece } from '~/model/chesspiece'

defineProps<{
  piece: IChessPiece
}>()

const chessGameStore = useChessGameStore()

const startDrag = (evt: DragEvent) => {

}
</script>

<template>
  <div
    :draggable="piece.color === chessGameStore.getColorTurn"
    @dragstart="startDrag($event)"
  >
    <img
      :src="piece.picture"
    >
  </div>
</template>
