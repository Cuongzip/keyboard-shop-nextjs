export default function objectToQueryString(obj) {
    const params = new URLSearchParams();

    Object.keys(obj).forEach((key) => {
        if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
            params.append(key, obj[key]);
        }
    });

    return params.toString();
}
