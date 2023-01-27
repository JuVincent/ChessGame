<script lang="ts" setup>
import type { IChessPiece } from '~/model/chesspiece'

defineProps<{
  piece: IChessPiece
}>()
</script>

<template  >
 
    <div>
      <img
        height="70"
        width="70"
        :src="piece.picture"
      >
    </div>
</template>
