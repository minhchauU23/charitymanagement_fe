const error = {
  // UNCATEGORIZED_EXCEPTION( 1000,"Uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
  //   INVALID_KEY( 1001,"Uncategorized error", HttpStatus.BAD_REQUEST),
  //   BAD_REQUEST(1002, "Bad request", HttpStatus.BAD_REQUEST),
  //   END_POINT_NOT_FOUND(1003, "Endpoint not found", HttpStatus.NOT_FOUND),

  //   UNAUTHENTICATED: "unauthenticated"
  //   UNAUTHORIZED( HttpStatus.FORBIDDEN.value(), "You do not have permission", HttpStatus.FORBIDDEN),

  USER_EXISTED: 'userError',
  USER_NOT_EXISTED: 'userError',
  BAD_CREDENTIALS: 'badCredentialError',

  EMAIL_INVALID: 'emailError',
  PASSWORD_INVALID: 'passwordError',
  FIRST_NAME_INVALID: 'firstNameError',
  LAST_NAME_INVALID: 'lastNameError',
  PHONE_INVALID: 'phoneError',
}

export default {
  get(code) {
    console.log(code)
    console.log(error[code])
    return error[code]
  },
}
