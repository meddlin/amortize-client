'use client'

import Table from './table';

const Form = () => {

    return (
        <>
            <form className="flex flex-col items-center justify-between p-24">
                <h2>Form content here</h2>

                <button
                    type="submit"
                    onClick={() => alert('clicked')}
                >
                    Calculate
                </button>
            </form>
            <Table />
        </>
    );
};

export default Form;