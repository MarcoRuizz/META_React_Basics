// allow js to be inserted into HTML or react components

function formatName(firstName: string, surname: string) {
    return firstName + ' ' + surname;
}

const result = <p>{formatName("Jane", "Wilson")}</p>

// <p> Jane Wilson </p>


// exmmp 2

const url = "profile.png";

const result2 = <img src={url} />;