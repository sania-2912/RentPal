// Mock data
const queueData = [
    { 
        id: 1, 
        address: '123 Maple Street, Anytown, USA 12345', 
        img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
        tenants: [
            { name: 'Alice Johnson', moveIn: '2024-07-15', status: 'Pending Review', statusClass: 'status-pending', initials: 'AJ', circleClass: 'circle-blue' },
            { name: 'Bob Williams', moveIn: '2024-07-20', status: 'Contacted', statusClass: 'status-contacted', initials: 'BW', circleClass: 'circle-green' },
        ]
    },
    { 
        id: 2, 
        address: '456 Oak Avenue, Metropolis, USA 67890', 
        img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600',
        tenants: [
            { name: 'Diana Prince', moveIn: '2024-07-30', status: 'Approved', statusClass: 'status-approved', initials: 'DP', circleClass: 'circle-purple' },
        ]
    }
];

function TenantQueue() {
    return (
        <>
            <h1>Tenant Queue Overview</h1>
            <div className="queue-grid">
                {queueData.map(property => (
                    <div className="queue-card" key={property.id}>
                        <div className="property-info">
                            <img src={property.img} alt={property.address} className="property-image" />
                            <h3 className="property-address">{property.address}</h3>
                        </div>
                        <div className="tenant-list-container">
                            <h4 className="tenant-list-title">Tenant Queue</h4>
                            <ul className="tenant-list">
                                {property.tenants.map(tenant => (
                                    <li className="tenant-item" key={tenant.name}>
                                        <div className={`tenant-initials-circle ${tenant.circleClass}`}>{tenant.initials}</div>
                                        <div className="tenant-details">
                                            <span className="tenant-name">{tenant.name}</span>
                                            <br></br>
                                            <span className="tenant-move-in">Move-in: {tenant.moveIn}</span>
                                        </div>
                                        <span className={`tenant-status ${tenant.statusClass}`}>{tenant.status}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TenantQueue;