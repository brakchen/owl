<template>
    <router-view>
        <template #default="{ Component }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive >
                <component :is="Component" />
              </keep-alive>
            </transition>
          </template>
    </router-view>
</template>

<script setup>
</script>