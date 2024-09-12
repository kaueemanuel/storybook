export const validateCPF = (cpf: string) => {
  // Remove caracteres que não são dígitos
  cpf = cpf.replace(/[^\d]/g, "")

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false
  }

  // Verifica se todos os dígitos são iguais, o que não é permitido
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false
  }

  // Validação dos dígitos verificadores
  for (let i = 9; i < 11; i++) {
    let soma = 0
    for (let j = 0; j < i; j++) {
      soma += parseInt(cpf.charAt(j)) * (i + 1 - j)
    }
    const resto = soma % 11
    const digitoVerificador = resto < 2 ? 0 : 11 - resto
    if (digitoVerificador !== parseInt(cpf.charAt(i))) {
      return false
    }
  }

  // Se passar por todas as validações, é um CPF válido
  return true
}
