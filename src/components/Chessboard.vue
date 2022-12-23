<script lang="ts" setup>
    const chessGame = useChessGameStore();

    
</script>

<template>
    <button v-on:click="chessGame.play()">Jouer</button>
    <div class="flex" :class="chessGame.isWhiteTurn ? 'flex-row' : 'flex-row-reverse'">
        <div v-for="col, colIndex in chessGame.getColumns" :key="col" class="flex" :class="chessGame.isWhiteTurn ? 'flex-col-reverse' : 'flex-col'" >
            <div v-for="row, rowIndex in chessGame.getRows" :key="row" class="relative">
                <ChessboardSquare :x="col" :y="row" :isDark="(rowIndex+colIndex) % 2 == 0"/>
                <span v-if="chessGame.isWhiteTurn && rowIndex === 0 || !chessGame.isWhiteTurn && rowIndex === 7" class="absolute text-center w-full color-white">{{col}}</span>
                <span v-if="chessGame.isWhiteTurn && colIndex === 0 || !chessGame.isWhiteTurn && colIndex === 7" class="absolute top-50%  color-white -translate-x-5 -translate-y-50% ">{{row}}</span>
            </div>
            
        </div>
    </div>
</template>