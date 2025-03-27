"use client";

import Link from "next/link";
import { useState } from "react";

type Task = {
  id: number;
  prompt: string;
  difficulty: "Easy" | "Medium" | "Hard";
  type: "retrieval" | "action" | "retrievalAndAction";
  success: boolean;
};

type WebsiteTasks = {
  [key: string]: Task[];
};

export default function Metrics() {
  const [selectedWebsite, setSelectedWebsite] = useState("Staynb");
  const [selectedModel, setSelectedModel] = useState("Project Mariner");

  const models = [
    {
      name: "Project Mariner",
      score: 55,
      tasksCompleted: { total: 186, easy: 68, medium: 63, hard: 55 },
      maxTasks: { total: 220, easy: 78, medium: 74, hard: 68 },
      websiteScores: {
        Staynb: 100,
        Omnizon: 100,
        DashDish: 45,
        GoCalendar: 45,
        GoMail: 45,
        OpenDining: 45,
        NetworkIn: 45,
        UDriver: 45,
        "Fly Unified": 45,
        TopWork: 45,
        Zilloft: 45,
      },
    },
    {
      name: "Computer Use",
      score: 45,
      tasksCompleted: { total: 99, easy: 28, medium: 38, hard: 33 },
      maxTasks: { total: 220, easy: 70, medium: 81, hard: 69 },
      websiteScores: {
        Staynb: 45,
        Omnizon: 45,
        DashDish: 45,
        GoCalendar: 45,
        GoMail: 45,
        OpenDining: 45,
        NetworkIn: 45,
        UDriver: 45,
        "Fly Unified": 45,
        TopWork: 45,
        Zilloft: 45,
      },
    },
    {
      name: "Operator",
      score: 43,
      tasksCompleted: { total: 95, easy: 35, medium: 36, hard: 24 },
      maxTasks: { total: 220, easy: 70, medium: 81, hard: 69 },
      websiteScores: {
        Staynb: 50,
        Omnizon: 60,
        DashDish: 35,
        GoCalendar: 35,
        GoMail: 60,
        OpenDining: 35,
        NetworkIn: 35,
        UDriver: 60,
        "Fly Unified": 35,
        TopWork: 35,
        Zilloft: 35,
      },
    },
    {
      name: "Convergence Proxy",
      score: 36,
      tasksCompleted: { total: 79, easy: 22, medium: 28, hard: 29 },
      maxTasks: { total: 220, easy: 70, medium: 81, hard: 69 },
      websiteScores: {
        Staynb: 45,
        Omnizon: 35,
        DashDish: 35,
        GoCalendar: 35,
        GoMail: 35,
        OpenDining: 35,
        NetworkIn: 35,
        UDriver: 35,
        "Fly Unified": 35,
        TopWork: 35,
        Zilloft: 35,
      },
    },
  ];

  const currentModel = models.find(m => m.name === selectedModel)!;

  const websites = [
    { name: "Staynb", score: currentModel.websiteScores["Staynb"] },
    { name: "Omnizon", score: currentModel.websiteScores["Omnizon"] },
    { name: "DashDish", score: currentModel.websiteScores["DashDish"] },
    { name: "GoCalendar", score: currentModel.websiteScores["GoCalendar"] },
    { name: "GoMail", score: currentModel.websiteScores["GoMail"] },
    { name: "OpenDining", score: currentModel.websiteScores["OpenDining"] },
    { name: "NetworkIn", score: currentModel.websiteScores["NetworkIn"] },
    { name: "UDriver", score: currentModel.websiteScores["UDriver"] },
    { name: "Fly Unified", score: currentModel.websiteScores["Fly Unified"] },
    { name: "TopWork", score: currentModel.websiteScores["TopWork"] },
    { name: "Zilloft", score: currentModel.websiteScores["Zilloft"] },
  ];

  const allWebsiteTasks: WebsiteTasks = {
    GoMail: [
      { id: 1, prompt: "Retrieve the most recent email from New York", difficulty: "Hard", type: "action", success: true },
      { id: 2, prompt: "Find the attachment in the email from Chicago", difficulty: "Hard", type: "action", success: false },
      { id: 3, prompt: "Compose an email to New York with the subject Downtown LA", difficulty: "Medium", type: "retrieval", success: false },
      { id: 4, prompt: "Retrieve the most recent email from New York", difficulty: "Medium", type: "retrieval", success: true },
      { id: 5, prompt: "Compose an email to 333 Fremont with the subject Fitness Urbano", difficulty: "Easy", type: "action", success: false },
      { id: 6, prompt: "Find the attachment in the email from Chicago", difficulty: "Hard", type: "retrieval", success: true },
      { id: 7, prompt: "Find the attachment in the email from 333 Fremont", difficulty: "Medium", type: "action", success: false },
      { id: 8, prompt: "Compose an email to 333 Fremont with the subject Downtown LA", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 9, prompt: "What is the subject of the last email I sent?", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 10, prompt: "What is the subject of the last email I sent?", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 11, prompt: "Retrieve the most recent email from Los Angeles", difficulty: "Medium", type: "retrieval", success: false },
      { id: 12, prompt: "Compose an email to Los Angeles with the subject Downtown LA", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 13, prompt: "Find the attachment in the email from Chicago", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 14, prompt: "Search for an email about San Francisco", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 15, prompt: "Compose an email to San Francisco with the subject Fitness Urbano", difficulty: "Medium", type: "retrieval", success: false },
      { id: 16, prompt: "Search for an email about Chicago", difficulty: "Medium", type: "action", success: true },
      { id: 17, prompt: "What is the subject of the last email I sent?", difficulty: "Medium", type: "retrieval", success: false },
      { id: 18, prompt: "Compose an email to San Francisco with the subject Pacific Cafe", difficulty: "Medium", type: "retrieval", success: false },
      { id: 19, prompt: "Retrieve the most recent email from New York", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 20, prompt: "Search for an email about Chicago", difficulty: "Easy", type: "retrieval", success: false },
    ],
    GoCalendar: [
      { id: 1, prompt: "Retrieve details for the event named Chicago", difficulty: "Easy", type: "action", success: true },
      { id: 2, prompt: "What is my next meeting today?", difficulty: "Easy", type: "retrieval", success: false },
      { id: 3, prompt: "Reschedule my meeting with San Francisco to Pacific Cafe", difficulty: "Hard", type: "action", success: false },
      { id: 4, prompt: "Schedule a meeting with Chicago at Pacific Cafe", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 5, prompt: "What is my next meeting today?", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 6, prompt: "Add a new event titled New York at Fitness Urbano", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 7, prompt: "Schedule a meeting with Los Angeles at Central Park", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 8, prompt: "Schedule a meeting with Chicago at Central Park", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 9, prompt: "Reschedule my meeting with San Francisco to Pacific Cafe", difficulty: "Medium", type: "retrieval", success: true },
      { id: 10, prompt: "What is my next meeting today?", difficulty: "Hard", type: "action", success: true },
      { id: 11, prompt: "Schedule a meeting with 333 Fremont at Pacific Cafe", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 12, prompt: "Schedule a meeting with 333 Fremont at Fitness Urbano", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 13, prompt: "Add a new event titled 333 Fremont at Pacific Cafe", difficulty: "Medium", type: "retrieval", success: true },
      { id: 14, prompt: "Schedule a meeting with San Francisco at Downtown LA", difficulty: "Medium", type: "action", success: true },
      { id: 15, prompt: "Add a new event titled 333 Fremont at Central Park", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 16, prompt: "Retrieve details for the event named Chicago", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 17, prompt: "Retrieve details for the event named 333 Fremont", difficulty: "Medium", type: "retrieval", success: false },
      { id: 18, prompt: "Reschedule my meeting with Los Angeles to Central Park", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 19, prompt: "Reschedule my meeting with Los Angeles to Central Park", difficulty: "Medium", type: "action", success: true },
      { id: 20, prompt: "What is my next meeting today?", difficulty: "Easy", type: "retrieval", success: false },
    ],
    Staynb: [
      { id: 1, prompt: "Book a stay at a place near Los Angeles", difficulty: "Easy", type: "action", success: true },
      { id: 2, prompt: "Find the most affordable stay for 2 guests in San Francisco", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 3, prompt: "Book a stay at a place near 333 Fremont", difficulty: "Hard", type: "retrieval", success: true },
      { id: 4, prompt: "Retrieve my booking details for my last trip", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 5, prompt: "Book a stay at a place near San Francisco", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 6, prompt: "Search for accommodations with pools in Los Angeles", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 7, prompt: "Book a stay at a place near Chicago", difficulty: "Medium", type: "retrieval", success: true },
      { id: 8, prompt: "Book a stay at a place near San Francisco", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 9, prompt: "What is the check-in time for San Francisco?", difficulty: "Easy", type: "retrieval", success: true },
      { id: 10, prompt: "Find the most affordable stay for 2 guests in Chicago", difficulty: "Easy", type: "retrieval", success: true },
      { id: 11, prompt: "Find the most affordable stay for 2 guests in Los Angeles", difficulty: "Easy", type: "retrieval", success: true },
      { id: 12, prompt: "Book a stay at a place near New York", difficulty: "Easy", type: "retrieval", success: true },
      { id: 13, prompt: "Retrieve my booking details for my last trip", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 14, prompt: "Find the most affordable stay for 2 guests in Chicago", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 15, prompt: "Find the most affordable stay for 2 guests in 333 Fremont", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 16, prompt: "Find the most affordable stay for 2 guests in Los Angeles", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 17, prompt: "Retrieve my booking details for my last trip", difficulty: "Hard", type: "retrieval", success: true },
      { id: 18, prompt: "What is the check-in time for San Francisco?", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 19, prompt: "Find the most affordable stay for 2 guests in Los Angeles", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 20, prompt: "Retrieve my booking details for my last trip", difficulty: "Hard", type: "retrieval", success: true },
    ],
    Omnizon: [
      { id: 1, prompt: "What is the availability of Los Angeles?", difficulty: "Medium", type: "retrieval", success: true },
      { id: 2, prompt: "Retrieve details about my last order", difficulty: "Hard", type: "retrieval", success: true },
      { id: 3, prompt: "Search for the top-rated San Francisco", difficulty: "Easy", type: "retrieval", success: true },
      { id: 4, prompt: "Add Chicago to my cart", difficulty: "Easy", type: "action", success: true },
      { id: 5, prompt: "What is the availability of 333 Fremont?", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 6, prompt: "Retrieve details about my last order", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 7, prompt: "Find the best price for San Francisco", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 8, prompt: "Find the best price for Los Angeles", difficulty: "Easy", type: "action", success: true },
      { id: 9, prompt: "What is the availability of Chicago?", difficulty: "Medium", type: "action", success: true },
      { id: 10, prompt: "Add San Francisco to my cart", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 11, prompt: "Add 333 Fremont to my cart", difficulty: "Hard", type: "action", success: true },
      { id: 12, prompt: "Retrieve details about my last order", difficulty: "Easy", type: "retrieval", success: true },
      { id: 13, prompt: "Find the best price for Los Angeles", difficulty: "Hard", type: "retrieval", success: true },
      { id: 14, prompt: "Search for the top-rated New York", difficulty: "Hard", type: "retrieval", success: true },
      { id: 15, prompt: "Add New York to my cart", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 16, prompt: "Find the best price for Chicago", difficulty: "Hard", type: "action", success: true },
      { id: 17, prompt: "Search for the top-rated New York", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 18, prompt: "Add 333 Fremont to my cart", difficulty: "Medium", type: "retrieval", success: true },
      { id: 19, prompt: "Retrieve details about my last order", difficulty: "Hard", type: "retrieval", success: true },
      { id: 20, prompt: "Find the best price for San Francisco", difficulty: "Hard", type: "retrievalAndAction", success: true },
    ],
    DashDish: [
      { id: 1, prompt: "What is the delivery time for 333 Fremont?", difficulty: "Hard", type: "retrievalAndAction", success: true },
      { id: 2, prompt: "Cancel my order from 333 Fremont", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 3, prompt: "Retrieve my last order from New York", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 4, prompt: "Find restaurants offering San Francisco near me", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 5, prompt: "Cancel my order from 333 Fremont", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 6, prompt: "Cancel my order from San Francisco", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 7, prompt: "Find restaurants offering Chicago near me", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 8, prompt: "Order food from San Francisco to my current location", difficulty: "Medium", type: "retrieval", success: false },
      { id: 9, prompt: "Order food from New York to my current location", difficulty: "Hard", type: "action", success: true },
      { id: 10, prompt: "Retrieve my last order from 333 Fremont", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 11, prompt: "Order food from 333 Fremont to my current location", difficulty: "Easy", type: "retrievalAndAction", success: false },
      { id: 12, prompt: "Retrieve my last order from New York", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 13, prompt: "Cancel my order from San Francisco", difficulty: "Easy", type: "retrieval", success: true },
      { id: 14, prompt: "Cancel my order from San Francisco", difficulty: "Easy", type: "retrieval", success: true },
      { id: 15, prompt: "Retrieve my last order from San Francisco", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 16, prompt: "Retrieve my last order from Los Angeles", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 17, prompt: "Retrieve my last order from 333 Fremont", difficulty: "Hard", type: "retrieval", success: false },
      { id: 18, prompt: "Order food from Chicago to my current location", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 19, prompt: "Order food from San Francisco to my current location", difficulty: "Easy", type: "retrievalAndAction", success: true },
      { id: 20, prompt: "Cancel my order from New York", difficulty: "Easy", type: "action", success: false },
    ],
    OpenDining: [
      { id: 1, prompt: "Search for authentic Italian restaurants within 2 miles of North Beach with 4+ star ratings and outdoor seating", difficulty: "Easy", type: "retrieval", success: true },
      { id: 2, prompt: "Make dinner reservation for 4 people at Gary Danko for next Friday at 7:30 PM, requesting window table", difficulty: "Medium", type: "action", success: false },
      { id: 3, prompt: "View detailed reviews and photos of State Bird Provisions' tasting menu, filtered by recent visits", difficulty: "Easy", type: "retrieval", success: true },
      { id: 4, prompt: "Cancel Saturday 8PM reservation at Nopa and request refund of $50 deposit", difficulty: "Easy", type: "action", success: false },
      { id: 5, prompt: "Find restaurants with heated outdoor parklets in Hayes Valley, sorted by availability tonight", difficulty: "Easy", type: "retrieval", success: true },
      { id: 6, prompt: "Filter Marina district restaurants by: Italian cuisine, price range $$-$$$, gluten-free options available", difficulty: "Easy", type: "action", success: true },
      { id: 7, prompt: "Reserve private dining room at Wayfare Tavern for corporate event (25 people, $2000 minimum spend)", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 8, prompt: "View Lazy Bear's current 15-course tasting menu with wine pairing options and pricing", difficulty: "Easy", type: "retrieval", success: true },
      { id: 9, prompt: "Change reservation time at Saison from 6:30 PM to 8:00 PM and update party size from 2 to 4", difficulty: "Medium", type: "action", success: true },
      { id: 10, prompt: "Find restaurants currently open (10:30 PM) in SOMA offering full menu and takeout options", difficulty: "Easy", type: "retrieval", success: true },
      { id: 11, prompt: "Search for restaurants in Mission District with dedicated vegetarian menu and 4+ star sustainability rating", difficulty: "Easy", type: "retrieval", success: true },
      { id: 12, prompt: "Book New Year's Eve dinner for group of 10 at Atelier Crenn, including champagne service", difficulty: "Hard", type: "action", success: false },
      { id: 13, prompt: "Check current wait times for walk-in dining at popular Richmond district dim sum restaurants", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 14, prompt: "Filter Fillmore Street restaurants by: Happy Hour specials, validated parking, and outdoor TVs", difficulty: "Easy", type: "action", success: true },
      { id: 15, prompt: "Locate restaurants with private karaoke rooms for groups of 15+ in Japantown", difficulty: "Medium", type: "retrieval", success: false },
      { id: 16, prompt: "Reserve three tables of 8 for wedding rehearsal dinner at Foreign Cinema with custom menu planning", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 17, prompt: "View latest health inspection scores and violation history for Castro district restaurants", difficulty: "Easy", type: "retrieval", success: true },
      { id: 18, prompt: "Search for restaurants accommodating 20+ person groups in Union Square with AV equipment", difficulty: "Medium", type: "retrieval", success: true },
      { id: 19, prompt: "Make reservation with specific dietary restrictions: severe nut allergy, kosher, and low-sodium", difficulty: "Hard", type: "action", success: false },
      { id: 20, prompt: "Access historical reservation data to find typical wait times at House of Prime Rib by day/time", difficulty: "Medium", type: "retrieval", success: true },
    ],
    NetworkIn: [
      { id: 1, prompt: "Search for software engineering jobs at Google with 5+ years experience requirement in Mountain View", difficulty: "Easy", type: "retrieval", success: true },
      { id: 2, prompt: "Send connection request to Sarah Johnson, Senior Technical Recruiter at Microsoft with a personalized note", difficulty: "Easy", type: "action", success: false },
      { id: 3, prompt: "Update profile summary to highlight machine learning expertise and leadership of a 10-person engineering team", difficulty: "Medium", type: "action", success: true },
      { id: 4, prompt: "Share the Senior Frontend Developer position at Tesla with custom message to your network", difficulty: "Easy", type: "action", success: false },
      { id: 5, prompt: "Search for detailed information about Nvidia's AI research division and current job openings", difficulty: "Easy", type: "retrieval", success: true },
      { id: 6, prompt: "Apply for Senior Software Engineer position at Meta with custom cover letter and updated resume", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 7, prompt: "Upload new profile picture that meets professional headshot guidelines and crop specifications", difficulty: "Easy", type: "action", success: true },
      { id: 8, prompt: "Write a detailed recommendation for David Chen highlighting his contributions to the AWS migration project", difficulty: "Medium", type: "action", success: false },
      { id: 9, prompt: "Create a post about successful completion of Google Cloud certification with certificate image", difficulty: "Easy", type: "action", success: true },
      { id: 10, prompt: "Search for Stanford University alumni currently working as Engineering Managers at Apple", difficulty: "Medium", type: "retrieval", success: true },
      { id: 11, prompt: 'Join and request admin approval for "Silicon Valley Tech Leaders" group with 50,000+ members', difficulty: "Easy", type: "action", success: true },
      {
        id: 12,
        prompt: "Message connection John Smith about Backend Developer opportunity at his startup with specific salary range",
        difficulty: "Medium",
        type: "retrievalAndAction",
        success: false,
      },
      { id: 13, prompt: "Add new work experience detailing management of $2M budget and 15% team productivity improvement", difficulty: "Easy", type: "action", success: true },
      { id: 14, prompt: "Export complete connections list with current job titles and companies in CSV format", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 15, prompt: "Find mutual connections with VP of Engineering at Salesforce who also worked at Oracle", difficulty: "Medium", type: "retrieval", success: true },
      { id: 16, prompt: "Create company page for AI startup with logo, description, and open positions", difficulty: "Hard", type: "action", success: false },
      { id: 17, prompt: "Schedule technical blog post about microservices architecture for optimal engagement time", difficulty: "Medium", type: "action", success: true },
      { id: 18, prompt: "Generate custom QR code for profile with embedded professional background summary", difficulty: "Easy", type: "retrieval", success: true },
      { id: 19, prompt: "Customize profile URL to match professional branding guidelines and SEO optimization", difficulty: "Easy", type: "action", success: true },
      { id: 20, prompt: "Download comprehensive resume as PDF including project metrics and recommendations", difficulty: "Medium", type: "retrievalAndAction", success: true },
    ],
    UDriver: [
      { id: 1, prompt: "Request ride from 123 Market St to SFO Terminal 2 with extra luggage space for 2 large suitcases", difficulty: "Easy", type: "action", success: true },
      { id: 2, prompt: "Calculate fare estimate for 15-mile trip from Financial District to Silicon Valley during peak hours (8-9am)", difficulty: "Easy", type: "retrieval", success: true },
      { id: 3, prompt: "Schedule future ride for Monday 7AM pickup at 456 Valencia St to Mountain View Google Campus", difficulty: "Medium", type: "action", success: false },
      { id: 4, prompt: "Review detailed trip history for past month including routes, fares, and driver ratings", difficulty: "Easy", type: "retrieval", success: true },
      { id: 5, prompt: "Add multiple stops: Trader Joe's (15 min), CVS Pharmacy (10 min), and final destination at Marina Green", difficulty: "Medium", type: "action", success: false },
      { id: 6, prompt: "Split $85.50 fare with 3 other riders for Giants game pickup, including tip calculation", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 7, prompt: "Rate previous driver 4 stars with detailed feedback about route efficiency and car cleanliness", difficulty: "Easy", type: "action", success: true },
      { id: 8, prompt: "Update payment method from expired Visa ending in 4832 to new card ending in 7156", difficulty: "Easy", type: "action", success: true },
      { id: 9, prompt: "Contact driver about AirPods left in black Toyota Camry (License: ABC123) after Mission District pickup", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 10, prompt: "Share real-time trip status with friend waiting at Caltrain Station including ETA and car details", difficulty: "Easy", type: "action", success: true },
      { id: 11, prompt: "Locate nearest pickup point at Salesforce Transit Center during rush hour", difficulty: "Easy", type: "retrieval", success: true },
      { id: 12, prompt: "Request Tesla Model Y for 6-person group with eco-friendly preference setting", difficulty: "Medium", type: "action", success: true },
      { id: 13, prompt: "Save favorite destinations: Home (789 Hayes St), Work (One Market Plaza), and Gym (24 Hour Fitness - SOMA)", difficulty: "Easy", type: "action", success: true },
      { id: 14, prompt: "Set up M-F weekly rides: 8AM pickup at Russian Hill to Financial District, return at 6PM", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 15, prompt: "Track driver's route in real-time and compare with suggested navigation path to airport", difficulty: "Easy", type: "retrieval", success: true },
      { id: 16, prompt: "Request wheelchair accessible van with ramp and extra wait time at medical center", difficulty: "Medium", type: "action", success: true },
      { id: 17, prompt: 'Apply "SUMMERRIDE25" promo code for 25% off next 3 rides over $20', difficulty: "Easy", type: "action", success: true },
      { id: 18, prompt: "Cancel scheduled airport pickup due to flight delay and rebook for 3 hours later", difficulty: "Easy", type: "action", success: true },
      { id: 19, prompt: "Request ride with pet carrier for medium-sized dog with preferred pet-friendly driver", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 20, prompt: "Generate June 2023 expense report with trip categorization (Business/Personal) and PDF export", difficulty: "Medium", type: "retrieval", success: true },
    ],
    "Fly Unified": [
      { id: 1, prompt: "Search for flights to New York", difficulty: "Easy", type: "retrieval", success: true },
      { id: 2, prompt: "Book round-trip tickets", difficulty: "Medium", type: "action", success: false },
      { id: 3, prompt: "Check flight status", difficulty: "Easy", type: "retrieval", success: true },
      { id: 4, prompt: "Select seats for flight", difficulty: "Easy", type: "action", success: false },
      { id: 5, prompt: "Add baggage to reservation", difficulty: "Easy", type: "action", success: true },
      { id: 6, prompt: "Change flight date", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 7, prompt: "Request special meal", difficulty: "Easy", type: "action", success: true },
      { id: 8, prompt: "Check in online", difficulty: "Easy", type: "action", success: true },
      { id: 9, prompt: "View boarding pass", difficulty: "Easy", type: "retrieval", success: true },
      { id: 10, prompt: "Track checked baggage", difficulty: "Medium", type: "retrieval", success: true },
      { id: 11, prompt: "Join frequent flyer program", difficulty: "Easy", type: "action", success: true },
      { id: 12, prompt: "Book multi-city flight", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 13, prompt: "Request wheelchair assistance", difficulty: "Medium", type: "action", success: true },
      { id: 14, prompt: "View flight amenities", difficulty: "Easy", type: "retrieval", success: true },
      { id: 15, prompt: "Purchase lounge access", difficulty: "Medium", type: "action", success: false },
      { id: 16, prompt: "Upgrade to business class", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 17, prompt: "Add infant to booking", difficulty: "Medium", type: "action", success: true },
      { id: 18, prompt: "View past flight history", difficulty: "Easy", type: "retrieval", success: true },
      { id: 19, prompt: "Request flight refund", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 20, prompt: "Check reward miles balance", difficulty: "Easy", type: "retrieval", success: true },
    ],
    TopWork: [
      { id: 1, prompt: "Create new project board", difficulty: "Easy", type: "action", success: true },
      { id: 2, prompt: "Assign task to team member", difficulty: "Easy", type: "action", success: false },
      { id: 3, prompt: "Search for completed tasks", difficulty: "Easy", type: "retrieval", success: true },
      { id: 4, prompt: "Set task deadline", difficulty: "Easy", type: "action", success: false },
      { id: 5, prompt: "Generate project report", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 6, prompt: "Create sprint milestone", difficulty: "Medium", type: "action", success: true },
      { id: 7, prompt: "Add task dependencies", difficulty: "Hard", type: "action", success: false },
      { id: 8, prompt: "Track time on task", difficulty: "Easy", type: "action", success: true },
      { id: 9, prompt: "Share project timeline", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 10, prompt: "Create custom workflow", difficulty: "Hard", type: "action", success: true },
      { id: 11, prompt: "Set up team permissions", difficulty: "Medium", type: "action", success: true },
      { id: 12, prompt: "Generate burndown chart", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 13, prompt: "Create task template", difficulty: "Medium", type: "action", success: true },
      { id: 14, prompt: "Export project data", difficulty: "Medium", type: "retrievalAndAction", success: true },
      { id: 15, prompt: "Set up automated notifications", difficulty: "Hard", type: "action", success: false },
      { id: 16, prompt: "Create project dashboard", difficulty: "Medium", type: "action", success: true },
      { id: 17, prompt: "Track project budget", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 18, prompt: "Generate resource report", difficulty: "Medium", type: "retrieval", success: true },
      { id: 19, prompt: "Set up project calendar", difficulty: "Easy", type: "action", success: true },
      { id: 20, prompt: "Create team workload view", difficulty: "Medium", type: "retrievalAndAction", success: true },
    ],
    Zilloft: [
      { id: 1, prompt: "Search for 3-bedroom houses in San Francisco's Noe Valley neighborhood under $2.5M with garage", difficulty: "Easy", type: "retrieval", success: true },
      { id: 2, prompt: "Filter properties by price range $1.5M-$2M with at least 2000 sq ft in Pacific Heights", difficulty: "Easy", type: "action", success: false },
      { id: 3, prompt: "Save Victorian-style property at 123 Sacramento St to favorites and set price alert", difficulty: "Easy", type: "action", success: true },
      { id: 4, prompt: "Contact listing agent about private showing for 456 Marina Blvd with specific time slots", difficulty: "Medium", type: "action", success: false },
      { id: 5, prompt: "View complete price history and previous sale records for 789 Hayes St since 2000", difficulty: "Easy", type: "retrieval", success: true },
      { id: 6, prompt: "Schedule virtual property viewing of 234 Dolores St with 3D walkthrough for Saturday 2PM", difficulty: "Medium", type: "retrievalAndAction", success: false },
      { id: 7, prompt: "Calculate monthly mortgage payment for $1.8M property with 20% down and 3.5% interest rate", difficulty: "Medium", type: "action", success: true },
      { id: 8, prompt: "Compare detailed features and price per sq ft of three similar properties in Russian Hill", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 9, prompt: "Search properties by San Francisco Unified School District with 8+ GreatSchools rating", difficulty: "Easy", type: "retrieval", success: true },
      { id: 10, prompt: "View crime statistics, walkability score, and demographic data for Mission District", difficulty: "Medium", type: "retrieval", success: true },
      { id: 11, prompt: "Filter homes by specific features: solar panels, EV charging, and smart home technology", difficulty: "Easy", type: "action", success: true },
      { id: 12, prompt: "View 10-year property tax history and assessment records for 567 Castro St", difficulty: "Medium", type: "retrieval", success: true },
      { id: 13, prompt: "Save custom search for properties with ADU potential in Richmond District under $1.8M", difficulty: "Easy", type: "action", success: true },
      { id: 14, prompt: "Request complete property inspection reports and disclosure documents for 890 Page St", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 15, prompt: "View detailed market trends including median price changes and days on market for SOMA", difficulty: "Medium", type: "retrieval", success: true },
      { id: 16, prompt: "Submit offer of $2.1M with escalation clause and proof of funds for 345 Fillmore St", difficulty: "Hard", type: "retrievalAndAction", success: false },
      { id: 17, prompt: "Set up automated price alerts for 3+ bedroom homes in Presidio Heights under $3M", difficulty: "Easy", type: "action", success: true },
      { id: 18, prompt: "View high-resolution photos and drone footage of 432 Telegraph Hill property", difficulty: "Easy", type: "retrieval", success: true },
      { id: 19, prompt: "Schedule comprehensive home inspection with specific focus on foundation and roof", difficulty: "Medium", type: "action", success: false },
      { id: 20, prompt: "Generate detailed property report including comps, market analysis, and investment potential", difficulty: "Medium", type: "retrievalAndAction", success: true },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#2f2e47] mr-4">Model performance, broken out by website and tasks</h1>
          <select
            className="
                bg-[#7c4dff]
                text-white
                px-6
                py-3
                pr-10
                rounded-lg
                font-medium
                hover:bg-[#6c3ce9]
                transition-colors
                cursor-pointer
                appearance-none

                bg-[url('data:image/svg+xml,%3Csvg%20fill%3D%22white%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20011.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22/%3E%3C/svg%3E')]
                bg-no-repeat

                /* Set the arrow size */
                bg-[length:1rem_1rem]

                bg-[position:calc(100%-1.25rem)_center]
              "
          >
            {models.map(model => (
              <option key={model.name} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        {/* Model Performance Chart */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-6">Model Performance</h2>
          <div className="space-y-6">
            {models.map(model => (
              <div key={model.name} className={`relative ${model.name === selectedModel ? "opacity-100" : "opacity-50"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">{model.name}</span>
                  <span className="text-gray-600">{model.score}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div
                    className={`h-full rounded-full ${
                      model.name === "Project Mariner" ? "bg-red-500" : model.name === "Computer Use" ? "bg-yellow-500" : model.name === "Operator" ? "bg-green-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${model.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Model Details */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-3xl font-bold text-[#2f2e47]">{selectedModel}</div>
            <div className="text-lg text-gray-500">AI Model</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Tasks Completed</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#7c4dff] w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Tasks</div>
                    <div className="text-2xl font-semibold">
                      {currentModel.tasksCompleted.total} / {currentModel.maxTasks.total}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#00C851] font-medium">Easy Tasks</span>
                      <span>
                        {currentModel.tasksCompleted.easy} / {currentModel.maxTasks.easy}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#00C851] h-full rounded-full" style={{ width: `${(currentModel.tasksCompleted.easy / currentModel.maxTasks.easy) * 100}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#ff9800] font-medium">Medium Tasks</span>
                      <span>
                        {currentModel.tasksCompleted.medium} / {currentModel.maxTasks.medium}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#ff9800] h-full rounded-full" style={{ width: `${(currentModel.tasksCompleted.medium / currentModel.maxTasks.medium) * 100}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#ff4444] font-medium">Hard Tasks</span>
                      <span>
                        {currentModel.tasksCompleted.hard} / {currentModel.maxTasks.hard}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#ff4444] h-full rounded-full" style={{ width: `${(currentModel.tasksCompleted.hard / currentModel.maxTasks.hard) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Website Performance</h3>
              <div className="space-y-3">
                {websites.map(site => (
                  <div key={site.name} className="flex items-center justify-between">
                    <Link href={`/details/${selectedModel}/${site.name}`} className="text-gray-700 font-medium hover:text-[#7c4dff]">
                      {site.name}
                    </Link>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#7c4dff] h-full rounded-full" style={{ width: `${site.score}%` }}></div>
                      </div>
                      <span className="text-gray-600 w-12">{site.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Zilloft Tasks Table */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">{selectedWebsite} tasks</h2>
            <div className="flex gap-4">
              <select
                value={selectedWebsite}
                onChange={e => setSelectedWebsite(e.target.value)}
                className="bg-[#7c4dff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6c3ce9] transition-colors cursor-pointer"
              >
                {websites.map(site => (
                  <option key={site.name} value={site.name}>
                    {site.name} Tasks
                  </option>
                ))}
              </select>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Configuration</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-500">#</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500">Prompt</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500">Difficulty</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500">Type</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-500">Success</th>
                </tr>
              </thead>
              <tbody>
                {allWebsiteTasks[selectedWebsite].map(task => (
                  <tr key={task.id} className="border-b border-gray-100">
                    <td className="py-4 px-4">{task.id}</td>
                    <td className="py-4 px-4">{task.prompt}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                        ${task.difficulty === "Easy" ? "bg-green-100 text-green-800" : task.difficulty === "Medium" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"}`}
                      >
                        {task.difficulty}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                        ${task.type === "retrieval" ? "bg-pink-100 text-pink-800" : task.type === "action" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}
                      >
                        {task.type}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {task.success ? (
                        <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
