
According to the task requirement, you should create a ToDo application from prepared React components and functions.
If you have ever created an application with React components, then you should be able to clearly understand what a React component is.
The concept of "function" is probably also familiar to you. You must be used to writing service code to create logic of how components behave in an application. 
In this tutorial, you will try to make the components work without writing code.

Let's get started.

> If you have already done something or created something in this project before you started reading this article, then reload the entire page in your browser and select "Reset to default demo" option after reloading.

On the left side of the screen you can see the resource panel that is available at the very beginning and broken down into sections.
From the numbers in the section headers, you have 11 components, 13 functions, and one template in the "Templates" section.

Let's look at the components first.
Open the "Components" section. Inside you can see the catalogues with components.

The directories are named so that you can easily find the right component that has a specific purpose in the project.
For example, there are three groups in this project:
* atom - are simple components such as buttons and icons;
* layout - are the components that are responsible for the layout of the components on the page;
* todo - are components that are specifically designed for the ToDo application.

In Webcodesk you can see how each component behaves individually (like in the famous Storybook).
Open any directory and just click on the name of any component.
A tab should appear in front of you in the central area of the screen, where you can see how the component should look and feel.

Here you can play with the component - change its properties, or click to see the corresponding events occurring.
In addition, you can also read the component specification, describing its properties and the purpose.
This is cool because you are not familiar with the components at this stage and how they can be used in an application.

Now let's have a look at the Functions section. This section has the same catalogues as the "Components" section.
If you expand the directory, you will notice that inside there are names of function sets that match the names of components.
This means that the sets contain functions somehow related to components - we will discuss this during the execution of the task later.

If you click on the name of the functions set, in a new tab you can read the specification of all functions that are included in this set.

You're in luck - you have instructions on how to build an application, and you don't need to get familiar with each component and figure out how to build the application.
However, in a real project, you would have to explore the specification of each component and function to start building the application.

So, let's start building according to the instructions.

First of all, you need to create a page named `main`, which will serve as the home page of our application.

> The page named "main" in Webcodesk projects is used as the home page and will be available at two addresses: `/` and `/main`

Click on the button with the "plus" icon next to the "Pages" section name.

(image)

Type in the page name `main` and press the `Create` button in the dialog.

(image)

A new tab should open in front of you - this is the editor of the 'main' page.

> If you do not see the "circle plus" icon in the center of the page, find the `Reload` button in the top toolbar and click on it to reload the page.

Now use the mouse to drag the `PageFrameWithActionButton` component from the "Components" section to an empty area in the center of the page.

After that, nothing will change visually on the page. So to check the result click on the `Structure` button in the top toolbar.
In this way, you will open the left panel in the page editor, where you will be able to see the components of the page at the moment.

(image)

You can see in the page structure that the root component of the page is some `pageFrameWithActionButton`.
This name exactly matches the name of the component that we dragged, but somehow this name starts with a small letter.

We need to stop here and find out where that name came from.

The point is that we can use many instances of components on the application pages.
Each of such instances may have different values in the properties.
That makes the component approach so popular in development - we can reuse the same components but with different settings in its properties.

Different instances of components in the pages must have unique names.
However, if you want to use the same instances of the component in different places on the page, or a different page at all, 
then you just need to give an identical name to these instances of the component.

In this case, Webcodesk automatically created a name for a new instance of the component.
If you have not changed this name, then when you create a new copy we may accidentally overwrite the properties of the previous instance with the same name.

So you need to change the name of the `pageFrameWithActionButton` instance.
Find the `Instance name` field in the properties panel on the right side of the screen and change the name to `mainPageFrame`.

(image)

Now click the `Save` button on the top toolbar - this way we will save our changes just in case.

> However, Webcodesk saves all changes in the page editor automatically if you switch to another tab.

Open a panel with the page structure. You will see several areas bordered by a dashed line. 
These are areas in which you can place other components.
Each of these areas corresponds to some property with the type `Element` or `Node` in the component instance.

(image)

Drag and drop the `NavigationTabs` component into the `Application Bar Content` area, which is in the `mainPageFrame` instance.
Highlight the newly created `navigationTabs` instance (click on it) and rename it as `mainPageNavigationTabs`.

(image)

You see that the background of your header is dark and therefore it blends in with the text of the buttons in `mainPageNavigationTabs` instance.
So we need to change the header color of the `mainPageFrame` instance.

Highlight `mainPageFrame` and find the "Application Bar Palette" property group in the property panel. Expand the group by clicking on it.
Then expand the "Background Color" internal group. 
Now select the name of the color `white` from the drop-down list in the "Color Hue" property.

(image)

You can see that the background of the central area of the page is slightly different from the background of the page title. 
So you should change the background of the page to the color "white" too.

With `mainPageFrame` selected, find the property "Color Hue" in the group "Main Area Palette -> Background Color" and set the value to "white".

> This project uses the Material UI library for its components, so most properties use the MUI components terms.

Click on the "Live Preview" tab to see how your page will look and feel live in your browser.

If you click on the navigation buttons at the top of the page, you will notice that the buttons are not activated when you click on them.
Let's try to bring them to life.

You need to create a flow diagram in which the navigation behavior will be described. 
In Webcodesk, flow diagrams are used to describe the sequence of actions that will be performed when some events occur.

For example, at this stage we need to describe what will happen if you click on the navigation button.

Click on the button with the "plus" icon next to the "Flows" section name.


The `NavigationTabs` component is designed specifically for the ToDo application, and its specification says that it should be used to filter ToDo records. 
So give the name `change-navigation-filter-by-click` to flow.

> Give a name to the flow that makes it clear what's going on in it. 
> In this way, we will be able to quickly understand where the necessary logic for the application is located.

(image)

A new tab with a new flow diagram will open in front of you. If you are not satisfied with the position of the diagram on the screen, 
you can move the whole picture with the mouse - press the left mouse button and drag the cursor in the desired position.

(image)

Now find a `mainPageNavigationTabs` instance in the panel on the left in the Pages section, expanding the `main` page branch of the resource tree.
Drag and drop the name of the `mainPageNavigationTabs` instance directly onto the `Application` diagram element. 
The `Application` element will be automatically replaced by the `mainPageNavigationTabs` instance element.

(image)

As you can see, the image of the instance element shows dots. 
The dot on the left indicates the data input, and the dots on the right indicate the data outputs.

All instances of components have one input - "props", which stands for all component properties except those that have the function type. 
The component may have several outputs. 
Each of the outputs corresponds to the property of the component with the function type, i.e. some event in the component.

In this case, you see two outputs and therefore two events may occur in the navigation: `onActiveTabUpdated` and `onChangeActiveTab`. 
As stated in the specification, the `onChangeActiveTab` event occurs when the user clicks on the navigation button.
You can use this event to make the button active when clicking on it.

But first, let's find out how the navigation component displays which button will be active at a certain point in time.

Switch again to the `main` page editor tab and select a `mainPageNavigationTabs` instance (click on it), 
you can find the `Active Tab Type` property in the properties. 
If you set a different value in this property, you can see that the active button has changed to another one.

(image)

Obviously, to switch the active button on the `onChangeActiveTab` event, you need to change the `Active Tab Type` property.
You have to describe it somehow in your `exchange-navigation-filter-by-click` flow.

Changing properties in instances of components is the responsibility of the corresponding functions. 
In this project, such functions are included in function sets with names identical to the names of components whose properties they can change.

Switch to the `change-navigation-filter-by-click` tab, find the `setActiveNavigationTab` function in the resource tree 
"Functions" -> "todo" -> "NavigationTabs" and drag the function name to any free area in the flow diagram.

(image)

Similar to the instances of components, each function has one input and can have several outputs on the flow diagram.

Now you need to connect the `onChangeActiveTab` output of the `mainPageNavigationTabs` instance to the `callFunction` input of the `setActiveNavigationTab` function.

> Move the mouse cursor over the `onChangeActiveTab` output point, press the left mouse button and drag the arrow that has appeared to the `callFunction` entry point and release the left mouse button.
> If you made a mistake and connected the wrong input and output, then just repeat the action with the correct output and input, then the connection will automatically update.

(image)

Now the `setActiveNavigationTab` function will be triggered by clicking on a button in the navigation. 
Still, nothing will happen on the page, because the result of the function is not passed to the properties of the component instance.

If you want to fix this, drag the name of the same `mainPageNavigationTabs` instance from the branch "Pages" -> "main" somewhere on the flow diagram.
Connect the `navigationTabsProps` output of the `setActiveNavigationTab` function to the input of the new `mainPageNavigationTabs` instance.

(image)

Now you can freely switch to the "Live Preview" tab and check the flow result.

All right, if everything works as intended, you can continue to complete the composition of the main page.

Switch to the tab of the `main` page editor, or if it is closed, open it by clicking on the page name in the "Pages" section.
Open the `Structure` panel in the page editor, 
and drag the `Container` component from the resource tree to the free `0 item` area of the group`Main Area Children` in the page structure.
Rename the `container` instance as `mainPageContainer`.

(image)

You may have noticed that some properties have names such as `0 item`, `1 item`, etc. 
For example, you can see this in the `Tabs` property in the `mainPageNavigationTabs` instance. 
This means that the `Tabs` property has an array type and can contain several similar properties or groups of properties.

> For more details about the property types in components, see the User Guide (link).

(image)

For now, just understand that you can increase the number of items in an array or remove items from an array right in the properties panel.

(image)

The `mainPageFrame` instance contains one item in the `Main Area Children` array and this is now enough for the container to which we will add other instances of the components.

Now you need to move the container down a bit because it overlaps with the top area of the page where the navigation is located.

(image)

So find the `Main Area Padding` property group in the `mainPageFrame` instance. 
Expand it and change the values of the `Padding Top` property to `100px`.

(image)

Click `mainPageContainer` instance in the page structure and change the `Max Width` property to `sm`.

(image)

Find the `Grid` component in the resource tree on the left and drag the name to the empty area inside the `mainPageContainer` on the page, or to the `Content` area in the page structure tree. 
And rename the instance as `mainPageGrid`.

(image)

The `Cells` property of the `mainPageGrid` instance contains 3 items by default. 
You only need two cells in the grid - one for the title and one for the DoTo list of entries.
So expand the `Cells` array and remove one item from the array by clicking on the `Delete` button near the property field name.

(image)

Now expand the group `Grid` in the properties of the `mainPageGrid` instance, and set the value of `Spacing` to 3.

(image)

Drag the `Typography` component from resources to the first cell of the `mainPageGrid` instance. 
Rename the instance as `mainPageLabel`. 
Set the following property values:
* `Align`: `center`
* `Variant`: `h5`
* `Text`: "ToDos"

(image)

Place the `Paper` component from resources in the second cell of the `mainPageGrid` instance.
Rename the copy of the component as `mainPagePaper` and set the following properties:
* `Elevation`: 2
* `Palette` -> `Background Color` -> `Color Hue`: "blue"
* `Palette` -> `Color` -> `Color Hue`: "white"

(image)

Drag the `ToDoNotesList` component from resources to `0 item` in the array `Children` under the `mainPagePaper` instance.
Rename the new instance as `mainPageNotesList`.

(image)

Now add a button that will create new entries in the ToDo list. 
Drag the `Action Button` component to the free area `Action Button Content` inside the `mainPageFrame` instance (find it in the page structure tree).
Rename the `Action Button` instance as `mainPageActionButton` and set such properties:
* `Color`: "primary"
* `Size`: "large"

(image)

Your button is missing a plus icon. The `SvgIcon` component is responsible for icons in the project. It displays SVG drawings as icons.
To save you time, you already have a prepared "plus" icon in the "Templates" section and the "icons" directory - `add-icon`.
There you will find an instance of the `SvgIcon` component with the preset value of the `Path` property.

So just drag the name `add-icon` from the "Templates" section to the free area `Icon` under the instance `mainPageActionButton` in the page structure tree.
And don't rename a new instance.

(image)

This is what the `main` page on the view should look like.

(image)

Then you need to create a second application page where the user can write the text of a new ToDo entry.
Create a new page in the "Pages" section and name it as `new-note`.

(image)

Now, quickly create a composition on the page.

Go to the tab with the `main` page. Select the `mainPageFrame` instance in the editor.
Copy it to the clipboard by pressing the `Ctrl + C` / `Command + C` key combination, or click the copy button on the top toolbar.

Now go to the tab of the `new-note` page.
Select the empty area at the root of the page structure tree and press the insertion key combination from the clipboard: `Ctrl + V` / `Command + V`.

(image)

Select the `mainPageActionButton` instance and delete it by pressing the `Delete` key or the `Delete` button on the top toolbar.
Do the same with `mainPageNavigationTabs` and `mainPageNotesList` instances.

(image)

Now you need to rename the following instances of components on the `new-note` page:
* `mainPageFrame` rename as `newNotePageFrame`
* `mainPageContainer` rename as `newNotePageContainer`
* `mainPageGrid` rename as `newNotePageGrid`
* `mainPageLabel` rename as `newNotePageLabel`
* `mainPagePaper` rename as `newNotePagePaper`

Set "New ToDo" to `Text` in the `NewNotePageLabel' instance.

Set the following properties in the `NewNotePagePaper' instance:
* `Elevation`: 2
* `Padding Spacing` -> `Padding Left`: 2
* `Padding Spacing` -> `Padding Right`: 2
* `Padding Spacing` -> `Padding Bottom`: 2
* `Palette` -> `Background Color` -> `Color Hue`: "yellow"
* `Palette` -> `Background Color` -> `Color Shade`: 100

Place the `NewNoteForm` component in the `Children` -> `0 item` of the `NewNotePagePaper` instance in the page tree structure.
Rename its instance to `newNotePageForm`.

(image)

So far, nothing works on the pages except switching the active button in navigation.

First, you need to make sure that when you click on the `mainPageActionButton` on the `main` page, 
the user went to the `new-note` page.

Create a new flow with the name `go-to-new-note-page`. 
Move the `mainPageActionButton` instance to the `Application` item, thereby replacing it.

(image)

The `goToPage` function is responsible for navigation between pages. Place the function in the empty area of the flow diagram.
The `mainPageActionButton` has an event `onClick` and you can bind this event to the input of the `goToPage` function.

(image)

But you may have noticed that this function is in a set of functions with the name of the `PageRouteNavigation` component.
And this function must be somehow related to this component.

Indeed, if you read the specification of the `goToPage` function, 
you will realize that the output of the `pageRouteAbchorProps` function should be associated with an instance of the `PageRouteNavigation` component. 

But we don't have a copy of that component on any page. That's because we only did visual components.
Now it's time to add the required invisible components.

Go to the tab of the page `main`. Open the page tree structure and select `mainPageFrame` instance.
In the property editor find the `Hidden Components` array and add one item to it by clicking the "+1" button.

(image)

Now drag the `PageRouterAnchor` component into the free area `0 item` under `Hidden Components` in the page structure tree.
Rename the new instance to `NewNotePageRouteAnchor` and set `/new-note` to the property `Page Route Path`.

(image)

Now you can go to the `go-to-new-note-page` tab of the flow diagram. 
Drag the `newТotePageRouteAnchor` instance somewhere on the free space in the diagram. 
Connect the `pageRouteAbchorProps` output of the `goToPage` function to the `props` input of the `newNotePageRouteAnchor` instance.

Because of this connection, the function can read the value of the `Page Route Path` property and navigate to the address specified there.

(image)

You can try how it works in the "Live Preview" tab.

Now you need to create a flow diagram to return the user to the main page if the user pressed the `Cancel` button in the form of adding a new note.

However, before that, you need to add an instance of the `PageRouterAnchor` component to the `new-note` page in order to go to the `main` page.

Open the tab of `new-note` page and add the item to the property `Hidden Components` in the instance `newNotePageFrame`.
Drag the `PageRouterAnchor` component to the new item, and rename the instance to `mainPageRouteAnchor`.
Set "/" to the `PageRoute Path` property.

(image)

Create a new flow chart named `cancelling-new-note`. 
Replace the `Application` element with the `newNoteForm` instance.
Add the `goToPage` function to the diagram and connect its input to the `onCancel` output of the `newNoteForm` instance.

> The `onCancel` event occurs when the user clicks on the `Cancel` button in the `newNoteForm` form.

Add the `mainPageRouteAnchor` instance (from the "Pages" section and the `new-note page`) to the diagram. 
Connect the `pageRouteAnchorProps` output of the `goToPage` function to the `props` input of the `mainPageRouteAnchor`.

(image)

You can make sure that clicking the `Cancel` button brings the user back to the home page in the tab "Live Preview".

The ToDo list on the home page is still empty. 
But this is fixable because you have a set of functions that you can use to get the list of ToDo notes, filter it and save it.

As far as the description of the functions in `ToDoActions` can be understood, 
you can load all entries from the database and place them in a buffer for further work with them through this buffer.

The list should be loaded at the very beginning of the application. This can easily be done in a new flow.

Create a new flow chart named `load-notes-on-start'. 
Put the `getNotes` function somewhere in the free space on the chart.
Connect the output `onApplicationStart` of the `Application` element to the input of the `getNotes` function. 
In this way, you have specified that the list of entries should be loaded at the start of the application in your browser.

(image)

The loaded list should be saved in the memory buffer. This can be done using the `putIntoNotesBuffer` function.
Connect the output `notes` of the function `getNotes` to the input of the function `putIntoNotesBuffer`.

(image)

You need a memory buffer to minimize the number of function calls to update the `mainPageNotesList` component.

You can connect a buffer to the component via the listener function, which will send updated data to the component every time the list in the buffer is changed.
Otherwise, you would have to add function calls to update the list in `mainPageNotesList` instance every time the list is changed.

Create a new flow chart named `update-notes-by-navigation-filter`. 
This name is chosen because the list must always be filtered by the selected filter type in the `mainPageNavigationTabs` instance.

Add the `listenToNotesBuffer` function to the diagram and connect its input to the `onApplicationStart` output of the `Application` element. 
Thus, you have specified that when launching the application in a browser, you should start monitoring the changes in the buffer.

(image)

Now you need to tell what to do when the list in the buffer changes.
Add the `filterNotes` function and connect its input to the `updatedData` output of the `listenToNotesBuffer` function.
Add `mainPageNotesList` instance and connect its input to the output `todoNotesListProps` of the function `filterNotes`.
Also add `mainPageNavigationTabs` instance and connect its input to the output `navigationTabsProps` of the function `filterNotes`.

(image)