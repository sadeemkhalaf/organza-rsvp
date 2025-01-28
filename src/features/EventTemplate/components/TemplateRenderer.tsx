interface TemplateRendererProps {
    eventDetails: any;
    guestDetails: any;
  }
  
  const TemplateRenderer: React.FC<TemplateRendererProps> = ({ eventDetails, guestDetails }) => {
    return (
      <div className="template-renderer p-6">
        <h1 className="text-4xl font-bold mb-4">{eventDetails.title}</h1>
        <p className="text-lg text-gray-700">{eventDetails.description}</p>
        <p className="text-md text-gray-500">
          {eventDetails.date} • {eventDetails.location}
        </p>
  
        <div className="guest-details mt-6">
          <h2 className="text-2xl font-semibold">Hello, {guestDetails.name}!</h2>
          <p className="text-md text-gray-700">Email: {guestDetails.email}</p>
          <p className="text-md text-gray-500">Your RSVP status: {guestDetails.status}</p>
        </div>
      </div>
    );
  };
  
  export default TemplateRenderer;
  