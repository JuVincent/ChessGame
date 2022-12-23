<script lang="ts" setup>
    const props = defineProps<{
        x: string,
        y: number,
        isDark: boolean
    }>()

    const chessGameStore = useChessGameStore()
    const piece = computedEager(()=>chessGameStore.getPiece(props.x, props.y))

</script>

<template>
    <div class="flex w-20 h-20 gap-0 justify-center items-center" :class="isDark ? 'bg-gray' : 'bg-light'">
        <span class="color-emerald-700">
            <img :src="piece?.picture" />
        </span>
    </div>
</template>