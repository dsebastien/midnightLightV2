Should contain components including everything they're made of (e.g., controller, service, model, directive, filter, stylesheet, tests, ...)

The idea being to isolate components as much as possible so that removing one can be done in a clean manner without worrying (too much) about side-effects.

Note that each component that includes TypeScript code MUST respect the following naming convention (not all files are required):
- <component_name>: folder for the component (mandatory)
- _<component_name>.scss: styles for the component (optional)
-  <component_name>.model.ts: model of the component (optional)
-  <component_name>.controller.ts: controller of the component (mandatory)
-  <component_name>.controller_test.ts: tests for the controller of the component (recommended)
-  <component_name>.template.html: template/partial view of the component (mandatory)
-  <component_name>.service.ts: service for the component (optional)
-  <component_name>.service_test.ts: tests for the service of the component (optional)
-  <component_name>.directive.ts: directive of the component (optional)
-  <component_name>.directive_test.ts: tests for the directive of the component (optional)
-  <component_name>.filter.ts (optional)


In addition:
- Each component MUST be placed in its own directory
- Components CANNOT be nested (i.e., use a flat structure)
- Each CSS class should start with the <component_name> in order to create an isolated namespace for each component
