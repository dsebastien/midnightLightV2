Should contain components including everything they're made of (e.g., controller, service, model, directive, filter, stylesheet, tests, ...)

The idea being to isolate components as much as possible so that removing one can be done in a clean manner without worrying (too much) about side-effects.

Note that each component that includes TypeScript code MUST respect the following naming convention (not all files are required):
*  <component_name>: folder for the component (mandatory)
* _<component_name>.scss: styles for the component (optional)
*  <component_name>.model.ts: model of the component (optional)
*  <component_name>.controller.ts: controller of the component (mandatory)
*  <component_name>.controller_test.ts: tests for the controller of the component (recommended)
*  <component_name>.template.html: template/partial view of the component (mandatory)
*  <component_name>.service.ts: service for the component (optional)
*  <component_name>.service_test.ts: tests for the service of the component (optional)
*  <component_name>.directive.ts: directive of the component (optional)
*  <component_name>.directive_test.ts: tests for the directive of the component (optional)
*  <component_name>.filter.ts (optional)

In addition:
* each component MUST be placed in its own directory
* components CANNOT be nested (i.e., use a flat structure)


For all components:
* aim for correct granularity: solve one problem and solve it well
* encapsulate: respect the namespace rule above to correctly isolate the component

For Web/CSS components:
* each CSS class MUST start with the component name in order to create an isolated namespace for each component
* follow the design approach described [here](../styles/README.md)
