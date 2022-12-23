<script lang="ts" setup>
    const game = useChessGameStore();
</script>

<template>
    <div class="flex flex-col h-full w-full justify-center items-center">
        <h1>{{ game.isWhiteTurn ? 'White' : 'Black'}}'s turn to play</h1>
        <Chessboard />
       
    </div>
</template>