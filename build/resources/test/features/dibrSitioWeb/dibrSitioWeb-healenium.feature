Feature: Plan de prueba para sitio web
  @TEST_IXR-93
  Scenario: Verificar funcionamiento de sección "ver todas"
    Given me encuentro en sitio web
    When al llegar a seccion casas y departamentos en venta
    And clickear opcion ver todas
    Then aparece listado de propiedades en venta
    And puedo ver todas las propiedades seleccionadas

  @dibrsitioweb @TEST_IXR-1 @TEST_IXR-87
  Scenario: Funcionamiento blog y llenado de campos formulario contacto
    Given me encuentro en sitio web
    When seleciono Blog en barra navegación principal
    And hago click en publicación seleccionada
    Then se muestra publicación
    When luego, hago click en Contacto en barra navegacion
    And ingreso campos de formulario