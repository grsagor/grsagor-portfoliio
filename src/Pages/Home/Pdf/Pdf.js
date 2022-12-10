import React from 'react';

const Pdf = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Golam Rahman Sagor - Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Golam Rahman Sagor - Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <center>
                <button className='btn' onClick={onButtonClick}>
                    Resume
                </button>
            </center>
        </div>
    );
};

export default Pdf;