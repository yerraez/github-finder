import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
          {alert.type === 'error' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" color='red'>
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>

          )}
          <p className="flex-1 text-base font-semibold leading-7">
              <strong>{alert.msg}</strong>
          </p>
      </p>
  )
}

export default Alert