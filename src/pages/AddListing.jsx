function AddListing() {
    return (
        <>
            <h1>Add New Property Listing</h1>
            <form className="listing-form">
                <section className="form-section">
                    <h2>Property Photos</h2>
                    <p>Upload high-quality images of your property to attract potential tenants.</p>
                    <div className="drop-zone">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <p>Drag & drop files here or click to upload</p>
                        <input type="file" id="photo-upload" multiple hidden />
                    </div>
                    <button type="button" className="secondary-button">Add More Photos (0/5)</button>
                </section>

                <section className="form-section">
                    <h2>Property Details</h2>
                    <p>Provide key information about your rental unit.</p>
                    <div className="form-grid">
                        {/* Form inputs would be controlled with useState in a real app */}
                        <div className="form-group">
                            <label htmlFor="rent-amount">Rent Amount (per month)</label>
                            <input type="number" id="rent-amount" placeholder="e.g., 1500" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bhk-number">BHK Number</label>
                            <select id="bhk-number" defaultValue="">
                                <option value="" disabled>Select BHK</option>
                                <option value="1">1 BHK</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="4">4 BHK</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="furnishing">Furnishing Options</label>
                            <select id="furnishing" defaultValue="">
                                <option value="" disabled>Select furnishing</option>
                                <option value="unfurnished">Unfurnished</option>
                                <option value="semi-furnished">Semi-furnished</option>
                                <option value="furnished">Furnished</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="facing-direction">Facing Direction</label>
                            <select id="facing-direction" defaultValue="">
                                <option value="" disabled>Select direction</option>
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="east">East</option>
                                <option value="north">West</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <h2>Location Details</h2>
                    <p>Enter the full address and specific wing details.</p>
                    <div className="form-grid">
                        {/* Form inputs would be controlled with useState in a real app */}
                        <div className="form-group">
                            <label htmlFor="wing-block">Wing/Block</label>
                            <input type="text" id="wing-block" placeholder="e.g., A-Wing, Block C" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="full-address">Full Address</label>
                            <textarea 
                                id="full-address" 
                                rows="4" 
                                placeholder="Enter property full address including street, city, state, and zip code."
                            ></textarea>
                        </div>
                    </div>
                </section>

                <div className="form-actions">
                    <button type="submit" className="primary-button">Add Property Listing</button>
                </div>
            </form>
        </>
    );
}

export default AddListing;