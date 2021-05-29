import React from 'react'

function Pagination({ perPage, total}) {
const pageNumbers =[];

for(let i=1; i<= Math.ceil(total/perPage); i++){
    pageNumbers.push(i);
}

    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number =>{
                    <li key={number} className='page-item'>
                        {number}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Pagination
