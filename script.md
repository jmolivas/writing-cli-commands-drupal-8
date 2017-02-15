### Generate Module

```
drupal generate:module \
--module="SANDCamp" \
--machine-name="sandcamp" \
--module-path="/modules/custom" \
--description="SANDCamp Writing CLI example" \
--core="8.x" \
--package="Custom" \
--no-interaction
```

```
commands:
  - command: 'generate:module'
    options:
        module: SANDCamp
        machine-name: sandcamp
        module-path: /modules/custom
        description: 'SANDCamp Writing CLI example'
        core: 8.x
        package: Custom
```

### Generate Command
```
drupal generate:command \
--extension="sandcamp" \
--extension-type="module" \
--class="DefaultCommand" \
--name="sandcamp:default" \
--services="entity_type.manager" \
--no-interaction
```

```
commands:
  - command: 'generate:command'
    options:
        extension: sandcamp
        extension-type: module
        class: DefaultCommand
        name: 'sandcamp:default'
        services:
            - entity_type.manager
```

### Add option
```
# import InputOption class
use Symfony\Component\Console\Input\InputOption;

# add nid option
  ->addOption(
    'nid',
    null,
    InputOption::VALUE_REQUIRED,
    $this->trans('sandcamp.default.example.options.file')
  )
```
