import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="btn btn-info m-3 font-weight-bold" style={{ marginLeft: 'auto' }}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/PagosPage" className="btn btn-info m-3 font-weight-bold" style={{ marginLeft: 'auto' }}>Pagos de Movilidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/FormasPagos" className="btn btn-info m-3 font-weight-bold" style={{ marginLeft: 'auto' }}>Formas de Pago</Link>
                    </li>
                </ul>
            </div >
            <div className="ml-auto">
                <Link to="/PagosFormPage" className="btn btn-outline-success mr-2">Agregar Pago</Link>
                <Link to="/FormasPagosForm" className="btn btn-outline-success">Agregar Forma de Pago</Link>
            </div>
        </nav>
    );
}

