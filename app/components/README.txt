Should contain components including everything they're made of (e.g., controller, service, model, tests, stylesheet, ...)

The idea being to isolate components as much as possible so that removing one can be done in a clean manner without worrying (too much) about side-effects.

Note that each component that includes TypeScript code MUST respect the following naming convention (not all files are required):
- <component_name>: folder for the component (mandatory)
- _<component_name>.scss: styles for the component (optional)
-  <component_name>.model.ts: model of the component (optional)
-  <component_name>.controller.ts: controller of the component (mandatory)
-  <component_name>.template.html: template/partial view of the component (mandatory)

Each component MUST be placed in its own directory.
