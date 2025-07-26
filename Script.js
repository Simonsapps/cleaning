const tasks = {
    '5': [
        { title: "Wipe Down Bathroom Sinks & Counters", description: "Grab a quick-drying spray cleaner and a cloth. A minute or two can make your bathroom feel instantly fresher." },
        { title: "Quick Kitchen Counter Sweep", description: "Clear any crumbs, wipe down the main prep areas, and push things back into place. It'll feel much more inviting." },
        { title: "Fluff Cushions & Fold Throws", description: "Give your sofa and chairs a quick refresh. Straightening cushions and neatly folding throws instantly tidies up a living space." },
        { title: "Empty Small Bins", description: "Take out the bathroom bin, office bin, or any other small wastebaskets that are getting full. Prevents odours and overflow." },
        { title: "Spot Clean a Mirror or Window", description: "Notice a smudge on a mirror or a fingerprint on a glass door? A quick spray and wipe can make a big difference to how bright a room feels." },
        { title: "Gather & Put Away \"Stray\" Items\"", description: "Walk through a room (or even just the living room) and grab anything that doesn't belong – remote controls, books, cups, etc. Put them in their rightful place." },
        { title: "Wipe Down Kitchen Hob/Stovetop", description: "After cooking, little splatters can build up. A quick wipe with a damp cloth or a dedicated kitchen cleaner keeps it from becoming a big job." },
        { title: "Organise a \"Junk Drawer\"", description: "Pick one drawer that's a bit chaotic (often in the kitchen or hall). Quickly pull out obvious rubbish and group similar items. Even a partial tidy helps." },
        { title: "Quick Vacuum High-Traffic Area", description: "If you have a cordless vacuum, give a quick pass to the entranceway, under the dining table, or a pet's favourite spot." },
        { title: "Sanitise Doorknobs & Light Switches", description: "These are high-touch areas. A quick wipe with a disinfectant wipe or spray can help keep germs at bay, especially during cold and flu season." }
    ],
    '10': [
        { title: "Clean One Bathroom Toilet & Sink", description: "Go beyond just wiping the sink. Give the toilet bowl a quick scrub, wipe down the outside of the toilet, and thoroughly clean the sink and taps." },
        { title: "Kitchen Counter & Sink Deep Clean", description: "Clear everything off your kitchen counters. Wipe them down thoroughly with a good cleaner. Scrub the sink and drain, and wipe down the tap." },
        { title: "Tidy & Organise a Single Surface", description: "Choose one cluttered surface – your coffee table, a bedside table, a desk, or the top of a dresser. Put items away, dust, and arrange what's left neatly." },
        { title: "Load/Unload the Dishwasher & Wipe Down Appliances", description: "If your dishwasher is full of clean dishes, unload it. If it's empty, load up dirty dishes. Then, quickly wipe down the front of your fridge, oven, and microwave." },
        { title: "Dust One Room's Surfaces", description: "Grab a microfiber cloth and quickly dust all accessible surfaces (tables, shelves, TV stand, window sills) in a single room, like the living room or bedroom." },
        { title: "Quick Floor Sweep/Vacuum of a Main Area", description: "Dedicate 10 minutes to thoroughly sweeping or vacuuming your most-used living area (e.g., living room, kitchen, or main hallway). Get into corners and under easily movable furniture." },
        { title: "Sort & File Mail/Papers", description: "Tackle that growing pile of papers. Quickly go through mail, bills, and other documents. Discard junk, open essential mail, and file away anything important." },
        { title: "Wipe Down Kitchen Cupboard Fronts (High Traffic)", description: "Focus on the most-used kitchen cabinets – the ones around the hob, sink, and bin. Quickly wipe away fingerprints and food splatters." },
        { title: "Make All Beds Properly & Organise Nightstands", description: "Don't just pull up the duvet. Take 10 minutes to properly make all the beds in the house (or at least the ones that are used). Straighten sheets, fluff pillows, and tidy up bedside tables." },
        { title: "Tidy Up One \"Problem Zone\"", description: "Pick a small area that consistently gets messy – the shoe pile by the door, the entry table with keys and wallets, or a specific shelf. Take 10 minutes to sort, put away, and clean that one spot." }
    ],
    '30': [
        { title: "Deep Clean One Bathroom", description: "This isn't just a quick wipe. Clean the toilet (inside and out), scrub the shower/tub, clean the sink and mirror, wipe down all surfaces, and quickly mop or clean the floor." },
        { title: "Kitchen Floor & Appliances Deep Clean", description: "Sweep/vacuum the kitchen floor thoroughly, then mop it. While it dries, give your main appliances (fridge exterior, oven exterior, microwave inside and out) a good wipe down." },
        { title: "Tackle Laundry - Wash, Dry, & Fold One Load", description: "Get a load of laundry from start to finish. Put a load in, transfer it to the dryer, and then fold/hang it right away. No more laundry piles!" },
        { title: "Vacuum/Sweep All Main Floors", description: "Give all the hard floors and carpets in your main living areas (living room, hallways, dining room) a thorough vacuum or sweep. Move small furniture for a better clean." },
        { title: "Dust & Polish a Whole Room", description: "Go through an entire room (e.g., living room or master bedroom) and dust all surfaces, including blinds, picture frames, and decor. Use furniture polish where appropriate." },
        { title: "Organise One Closet/Cabinet", description: "Pick one small closet (like a linen closet or coat closet) or a single kitchen cabinet/pantry shelf. Pull everything out, wipe down the shelves, discard/donate what you don't need, and put everything back neatly." },
        { title: "Clean Interior Windows/Mirrors in Main Rooms", description: "Clean the interior of all windows and large mirrors in your living room, dining room, or bedroom. This can dramatically brighten up a space." },
        { title: "Tidy Up & Declutter a Bedroom", description: "Make the bed properly, put away all clothes and personal items, clear bedside tables, and quickly vacuum/sweep the floor. Focus on making it a serene space." },
        { title: "Wipe Down All Interior Doors & Handles", description: "Doors, especially those in high-traffic areas, can accumulate grime and fingerprints. Give all your interior doors and their handles a good wipe down with a general cleaner." },
        { title: "Sort & Organise a \"Problem Area\" (e.g., entryway, playroom corner, home office desk)", description: "Dedicate 30 minutes to a notorious clutter magnet. This might involve sorting shoes, organising toys, tidying a home office desk, or clearing off a specific workbench. The goal is to make it functional and tidy." }
    ]
};


let currentTasksList = [];
let availableTasks = [];
let selectedTime = null;


function selectTime(time) {
    selectedTime = time;
    currentTasksList = tasks[time.toString()]; // Get the list for the selected time
    availableTasks = [...currentTasksList]; // Copy to work with, so original is preserved
    document.getElementById('timeSelection').style.display = 'none';
    document.getElementById('taskDisplay').style.display = 'block';
    getNewTask(); // Suggest the first task
}


function getNewTask() {
    if (availableTasks.length === 0) {
        // If all tasks have been suggested, reset available tasks
        availableTasks = [...currentTasksList];
        alert("You've gone through all the tasks for this time! We're showing them again.");
    }


    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    const suggestedTask = availableTasks[randomIndex];


    document.getElementById('taskTitle').innerText = suggestedTask.title;
    document.getElementById('taskDescription').innerText = suggestedTask.description;


    // Remove the suggested task from the available tasks to prevent immediate re-suggestion
    availableTasks.splice(randomIndex, 1);
}


function resetApp() {
    selectedTime = null;
    currentTasksList = [];
    availableTasks = [];
    document.getElementById('timeSelection').style.display = 'block';
    document.getElementById('taskDisplay').style.display = 'none';
    document.getElementById('taskTitle').innerText = '';
    document.getElementById('taskDescription').innerText = '';
}