# Dropdown list

## Variants and Usage
* `default` - Used as base for other dropdowns
* `with-breakpoint` - Used in: Footer
* `secondary` - Used in: Filters
* `with-nested` - Used in: Sidebar
* `inner` - Used in: with-nested
* `detailed-content` - Used in: Minicart (to do: name change?)

## Accessibility:
* Buttons (reactive elements, which open dropdown) should have following aria attributes:
    * `aria-expanded` - set to `true` if dropdown field is open, to `false` when it's closed
    * `aria-controls` where value it's an `id` of content dropdown element
* Dropdown content should have `aria-hidden` attribute set to `true` of it's closed and to `false` when it's open.
* focus management and keyboard support should be implemented
