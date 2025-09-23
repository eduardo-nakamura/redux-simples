import React from 'react'

import Card from './Card'

const Sorteio = (props) => {

    return (
        <Card title="Sorteio de Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong> </strong>
                    {/* {Math.floor(Math.random() * (max - min + 1)) + min} */}
                </span>


            </div>

        </Card>
    )
}

export default Sorteio;