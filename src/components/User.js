import React from 'react'

function User({name,surname,age,friends}) {
  return (
    <div>
        {
            friends.map((friend)=><div>{friend}</div>)
        }
    </div> //App de userin terkibindeki name
    //ve surname propslar vasitesi ile menimsedildi
  )
}

export default User