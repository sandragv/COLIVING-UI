import React from 'react';

const Benefits = () => {
    return (
        <section id="benefits">
            <h2>Ventajas</h2>
            <div className="flex-container">
                <div className="benefit">
                    <div className="icon furnished"></div>
                    <h3>Completamente amueblado</h3>
                </div>
                <div className="benefit">
                    <div className="icon included"></div>
                    <h3>Servicios incluidos</h3>
                </div>
                <div className="benefit">
                    <div className="icon flexible"></div>
                    <h3>Alquileres flexibles</h3>
                </div>
                <div className="benefit">
                    <div className="icon cleaning"></div>
                    <h3>Servicio de limpieza</h3>
                </div>
                <div className="benefit">
                    <div className="icon professionals"></div>
                    <h3>Gestores profesionales</h3>
                </div>
                <div className="benefit">
                    <div className="icon community"></div>
                    <h3>Comunidad de personas afines</h3>
                </div>                                                
            </div>
        </section>
    )
}

export default Benefits