export const intitialValues = () => {
    return {
      "oldPassword": "",
      "newPassword": ""
    }
}

export const dataForServer = (values:any) => {
    return {
        "email": values?.email,
        "oldPassword": values?.oldPassword,
        "newPassword": values?.newPassword
    }
}

