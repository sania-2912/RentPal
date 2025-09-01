// In a real app, this data would come from an API
const listingsData = [
    { id: 1, title: '123 Pine St, Sector 2, Gurgaon', rent: '25,000', details: '2 BHK • Fully Furnished', status: 'Available', statusClass: 'status-available', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600' },
    { id: 2, title: '45 Lake View, Phase 3, Bangalore', rent: '35,000', details: '3 BHK • Semi-Furnished', status: 'Rented', statusClass: 'status-rented', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600' },
    { id: 3, title: '789 City Rd, Downtown, Mumbai', rent: '18,000', details: '1 RK • Unfurnished', status: 'Maintenance', statusClass: 'status-maintenance', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600' },
];

function ManageListings() {
    return (
        <>
            <h1>Manage Your Property Listings</h1>
            <div className="listings-grid">
                {listingsData.map(listing => (
                    <div className="listing-card" key={listing.id}>
                        <img src={listing.img} alt={listing.title} className="listing-image" />
                        <div className="listing-card-body">
                            <h3 className="listing-title">{listing.title}</h3>
                            <p className="listing-rent">Rent: ₹{listing.rent}/month</p>
                            <div className="listing-details">{listing.details}</div>
                            <span className={`listing-status ${listing.statusClass}`}>{listing.status}</span>
                        </div>
                        <div className="listing-card-footer">
                            <a href="#" className="action-link"><i className="fas fa-pencil-alt"></i> Edit</a>
                            <a href="#" className="action-link delete-link"><i className="fas fa-trash-alt"></i> Delete</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ManageListings;