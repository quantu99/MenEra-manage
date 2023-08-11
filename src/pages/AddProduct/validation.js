const validation = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = 'This field is required';
    }
    // price
    if (!values.price) {
        errors.price = 'This field is required';
    } else if (!/^\d+$/.test(values.price)) {
        errors.price = 'Price must be a number';
    } else if (values.price.indexOf(' ') !== -1) {
        errors.price = 'Name must not have the empty space ';
    }
    // color:
    if (!values.color) {
        errors.color = 'This field is required';
    }
    // type:
    if (Array.isArray(values.type) && values.type.filter(Boolean).length === 0) {
        errors.type = 'This field is required';
    }
    // description:
    if (!values.description) {
        errors.description = 'This field is required';
    }
    if (values.description.length > 1000) {
        errors.description = 'This field must not be longer than 1000 letters';
    }
    // Image url1:
    if (!values.imageUrl1) {
        errors.imageUrl1 = 'This field is required';
    } else if (values.imageUrl1.indexOf(' ') !== -1) {
        errors.imageUrl1 = 'Url must not have the empty space ';
    } else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(values.imageUrl1)) {
        errors.imageUrl1 = 'Please enter a valid URL';
    }
    // Image url2:
    if (!values.imageUrl2) {
        errors.imageUrl2 = 'This field is required';
    } else if (values.imageUrl2.indexOf(' ') !== -1) {
        errors.imageUrl2 = 'Url must not have the empty space ';
    } else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(values.imageUrl2)) {
        errors.imageUrl2 = 'Please enter a valid URL';
    }
    return errors;
};
export default validation;
