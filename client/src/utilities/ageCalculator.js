export function calculateAge(birthDate) {
    // Parse the input birth date
    const birth = new Date(birthDate);
    if (isNaN(birth)) {
        throw new Error('Invalid date format. Please use a valid date format.');
    }

    // Get the current date
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    const dayDifference = today.getDate() - birth.getDate();

    // Adjust the age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}
