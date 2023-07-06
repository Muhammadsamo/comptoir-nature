<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap");

/* width */
::-webkit-scrollbar {
  width: 10px;
}

@media screen and (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 5px;
  }
}

/* Track */
::-webkit-scrollbar-track {
  background: #e2dad4;
  border-radius: 5px;
  cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #826b57;
  border-radius: 5px;
  cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e2dad4;
  cursor: pointer;
}
</style>
