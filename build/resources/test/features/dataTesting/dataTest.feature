Feature: Pruebas de conexión a base de datos

  Background:
    Given Ingresar a base de datos

  Scenario Outline: confirmar usuario y clave en base de datos.
    When  realizo consulta con "<usuario>" y "<clave>" a base de datos
    Then recibo mensaje "<resultado>" de validación de credenciales

    Examples:
      | usuario      | clave     | resultado  |
      | dbustamanter | Tsoft2023 | correcta   |
      | igarate      | holaMundo | incorrecta |
      | jespeche     | asdad     | incorrecta |
      | cmillan      | H0l4Mvnd0 | correcta   |

  Scenario: confirmar usuario y clave en base de datos correcto.
    When  realizo consulta con "dbustamanter" y "Tsoft2023" a base de datos
    Then recibo mensaje "correcta" de validación de credenciales

  Scenario: confirmar usuario y clave en base de datos incorrecto.
    When  realizo consulta con "dbustamanter" y "Tsoft2024" a base de datos
    Then recibo mensaje "correcta" de validación de credenciales