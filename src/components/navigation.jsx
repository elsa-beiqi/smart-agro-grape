export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Smart Agro Grape  
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                O projekti
              </a>
            </li>
            <li>
              <a href='#goals' className='page-scroll'>
                Cilji
              </a>
            </li>
            <li>
              <a href='#deliverables' className='page-scroll'>
                Rezultati
              </a>
            </li>
            <li>
              <a href='#news' className='page-scroll'>
                Novice
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
