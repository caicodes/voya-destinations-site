<template>
  <div class="grid grid-flow-col gap-2">
    <div
      class="twitter btn btn-circle btn-ghost hover:bg-white dark:hover:bg-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current w-5 h-5"
      >
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        ></path>
      </svg>
    </div>

    <div
      class="youtube btn btn-circle btn-ghost hover:bg-white dark:hover:bg-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 24 24"
        class="fill-current w-5 h-5"
      >
        <path fill="var(--bg-yt)" d="M5.5 6h13.1v12H5.5z" />
        <path
          d="M19.6 3.2C16 2.9 8 2.9 4.4 3.2.5 3.5 0 5.8 0 12c0 6.2.5 8.5 4.4 8.8 3.6.2 11.6.2 15.2 0 3.9-.3 4.4-2.6 4.4-8.8 0-6.2-.5-8.5-4.4-8.8zM9 16V8l8 4-8 4z"
        />
      </svg>
    </div>

    <div
      class="facebook btn btn-circle btn-ghost hover:bg-white dark:hover:bg-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current w-5 h-5"
      >
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply transition-colors duration-500;
}
.twitter:hover {
  color: #1da1f2;
}

.youtube:hover {
  color: #ff0000;
}

.facebook:hover {
  color: #4267b2;
}
</style>
