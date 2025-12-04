// src/modules/tours/TourService.js
import Tour from "./Tourmodel.js";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchTours() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Server error (${response.status})`);

    const json = await response.json();

    const tours = json.slice(0, 6).map(item =>
      new Tour({
        id: item.id,
        title: item.title,
        description: item.body,
        image: "/img/placeholder-tour.png"
      })
    );

    return { status: "success", data: tours };
  } catch (err) {
    return { status: "error", message: err.message || "Network error" };
  }
}
