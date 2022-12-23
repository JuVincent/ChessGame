<script setup lang="ts">
    //const chessGameStore = useChessGameStore()

    
</script>

<template>
    <div class="flex h-full w-full justify-center items-center">
        <router-link 
        to="/game"
        class="flex w-75 h-15 border rounded justify-center items-center hover:bg-emerald-900 hover:cursor-pointer">
            <span class="text-2xl color-white">Nouvelle partie</span>
        </router-link>
    </div>
</template>