import React from 'react'

function Instagram() {
  return (
      <div class="container mx-auto py-8">
          <h1 class="text-2xl font-bold mb-4">Siga-nos no Instagram</h1>
          <a class="instagram-link inline-block bg-white rounded-md p-4 shadow-md" href="#">
              <svg class="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a9.993 9.993 0 0 0-8.99 5.55A9.987 9.987 0 0 0 1 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-1.3-.25-2.55-.74-3.7A9.993 9.993 0 0 0 12 2zm9 10c0 .39-.04.77-.12 1.15-.15.78-.46 1.52-.92 2.18-.6.83-1.36 1.49-2.18 2.02-.6.38-1.25.65-1.93.8-.37.1-.76.16-1.15.18h-.44c-.39-.02-.78-.08-1.15-.18-.68-.15-1.33-.42-1.93-.8-.82-.53-1.58-1.19-2.18-2.02-.46-.66-.77-1.4-.92-2.18A8 8 0 0 1 12 4a8 8 0 0 1 8 8zm-8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <span class="ml-2">bemcasadosdany</span>
          </a>
      </div>
  )
}

export default Instagram