import React from 'react'

export default function About(props) {
  return (
    <div classNameName="container" style={{backgroundColor:props.mode==='dark'?'#c7baba':'white'}}>
        <h1 classNameName="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={{backgroundColor:props.mode==='dark'?'#c7baba':'white'}}>
  <div className="card"style={{backgroundColor:props.mode==='dark'?'#c7baba':'white'}}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Made By Aryan
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      Yo How are you
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
