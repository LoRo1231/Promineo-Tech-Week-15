import React from 'react';
//import 'https://64b163cf062767bc482624b9.mockapi.io';

function ViewTable(){

    //const url = ["https://64b163cf062767bc482624b9.mockapi.io"]; trying to hook up to an API

    
    return(
        <div>
            <div className='container'>
                <table className='table bg-dark table-striped text-light mt-3 p-3'>
                    <tr>
                        <th> House Name </th>
                        <th> House Address </th>
                        <th> Square Footage </th>
                        <th> Number of Rooms </th>
                        <th> Update House </th>
                        <th> Delete House </th>
                    </tr>
            
                  
                </table>
            </div>

        </div>
    );
}

export default ViewTable;