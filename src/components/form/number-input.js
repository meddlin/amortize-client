import { ErrorMessage } from "formik";

const NumberInput = ({ 
    type, name, id,
    title, value, 
    touched, errors, handleChange, handleBlur 
}) => {
    return (
        <>
            <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">{title}</label>
            <div className="mt-2 mr-5 flex flex-col">
                <input 
                    type={type}
                    name={name}
                    id={id}
                    data-testid="salePrice"
                    className={ `${errors && touched ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                />
                <ErrorMessage name="salePrice" component="span" className="error text-xs text-red-700" />
            </div>
        </>
    );
};

export default NumberInput;