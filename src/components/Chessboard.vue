<script lang="ts" setup>
    const {width, height} = useWindowSize()
    const isLandscapeMode = computedEager(() => { return width.value > height.value})
    const chessGame = useChessGameStore()
    const boardClass = computed(() => (isLandscapeMode.value ? 'w-75vh h-75vh min-w-75vh min-h-75vh': 'w-75vw h-75vw min-w-75vw min-h-75vw'))
    const LABEL_BASE_VALUE = 'select-none h-full w-full flex justify-center items-center absolute color-white'
    const labelClass = computed(() => (isLandscapeMode.value ? 'text-size-[clamp(.8rem,.5rem+2vh,3rem)]': 'text-size-[clamp(.8rem,.5rem+2vw,3rem)]'))
    const showLabel = (index: number) => {
        return chessGame.isWhiteTurn && index === 0 || !chessGame.isWhiteTurn && index === 7
    }
</script>

<template>
    <div :class="boardClass" class="flex flex-column">
        <div v-for="col, colIndex in CHESSBOARD_COLUMNS" :key="col" class="flex flex-1" :class="chessGame.isWhiteTurn ? 'flex-col-reverse' : 'flex-col'" >
            <div v-for="row, rowIndex in CHESSBOARD_ROWS" :key="row" class="flex-1 relative">
                <ChessboardSquare :isDark="(rowIndex+colIndex) % 2 == 0"/>
                <span v-if="showLabel(rowIndex)" :class="[LABEL_BASE_VALUE,labelClass]" >{{col}}</span>
                <span v-if="showLabel(colIndex)" :class="[LABEL_BASE_VALUE,labelClass]" class="-translate-100%">{{row}}</span>
            </div>
        </div>
    </div>
</template>