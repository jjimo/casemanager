import React from 'react';

const Case = () => {
    return (
        
        <div className="case">
            <div>
                <p>Case ID</p>
                <p>9065153171</p>
            </div>

            <p>19/10/2021</p>
            <p>Pending FIT SIM</p>
            <td>
                <button className="btn btn-warning">Edit <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg></button>
                <button className="btn btn-success">Completed <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></button>
            </td>

        </div>

    );
}
 
export default Case;