import './App.css';
const AdminPanel = () => {
    return(
        <div>
            <div className="topnav">
            <h1 className="head-nav">RIOD ADMIN PANEL</h1>
          <button className="button-nav">Signout</button>
            </div>
            <br></br><br></br><br></br>
            <div>

            <table className="container-table">
            <tr>
                <th>Mob No</th>
                <th>password</th>
                <th>Paid Limit</th>
                <th>Expires</th>
            </tr>
                
            <tr>
            <td>9946641746</td>
            <td>rewq</td>
            <td>0</td>
            <td>0</td>
            <td className="row-update"><input type="text" className="txt-field" placeholder="[No of devices limit]"/></td>
            <td className="row-update"><input type="text" className="txt-field" placeholder="Expiry date"/></td>
            <td className="row-update"><button className="btn">update</button></td>
            </tr>

            <tr>
            <td>8946641746</td>
            <td>rewq</td>
            <td>5</td>
            <td>7/3/20</td>
            <td className="row-update"><input type="text" className="txt-field" placeholder="[No of devices limit]"/></td>
            <td className="row-update"> <input type="text" className="txt-field" placeholder="Expiry date"/></td>
            <td className="row-update"><button className="btn">update</button></td>
            </tr>

            <tr>
            <td>9946641741</td>
            <td>rewq</td>
            <td>6</td>
            <td>8/3/20</td>
            <td className="row-update"><input type="text" className="txt-field" placeholder="[No of devices limit]"/></td>
            <td className="row-update"><input type="text" className="txt-field" placeholder="Expiry date"/></td>
            <td className="row-update"><button className="btn">update</button></td>
            </tr>
            </table>
            </div>
        </div>
    );    
}
export default AdminPanel;