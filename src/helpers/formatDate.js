export const formatDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        daty: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
};