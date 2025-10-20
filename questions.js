window.questions = [
  {
    "question": "A sales operations manager wants every new retail store onboarding to automatically trigger a predefined sequence of tasks, such as “Initial Stock Check” and “Display Setup.” What is the best configuration?",
    "options": [
      "Create manual task lists each time a store is onboarded",
      "Configure Action Plan Templates linked to store onboarding records to auto-generate tasks",
      "Use free-text notes in store records to track required steps",
      "Ask reps to remember onboarding steps during visits"
    ],
    "answer": 1,
    "explanation": "Overall explanation Action Plan Templates automate task creation, ensuring consistency and compliance. Manual task lists, free-text notes, or memory-based tracking are error-prone and non-scalable."
  },
  {
    "question": "A manager wants specific compliance checks added automatically for all new promotions, ensuring reps validate shelf placement, pricing, and signage every time. What is the best solution?",
    "options": [
      "Build a static checklist document for reps",
      "Use Action Plans linked to new promotion records to auto-generate compliance tasks",
      "Require reps to create their own tasks per promotion",
      "Track compliance informally via calls and emails"
    ],
    "answer": 1,
    "explanation": "Overall explanation Linking Action Plans to promotion creation ensures standardized compliance tasks are generated automatically. Static documents, rep-created tasks, or informal tracking lack automation and governance."
  },
  {
    "question": "A territory lead needs to create region-specific action plans because stores in urban areas require additional merchandising steps compared to rural stores. What is the most efficient approach?",
    "options": [
      "Use one generic Action Plan for all stores regardless of region",
      "Add additional steps manually for urban stores each time",
      "Configure multiple Action Plan Templates segmented by region type",
      "Ask reps to add missing tasks during visits"
    ],
    "answer": 2,
    "explanation": "Overall explanation Regional-specific templates provide automation and standardization while reducing manual work. Generic plans, manual additions, or rep-dependent changes increase error risk and complexity."
  },
  {
    "question": "A field manager wants to automate seasonal tasks like “Holiday Display Setup” and “Special Stock Audit” for specific date ranges. How should this be handled?",
    "options": [
      "Have reps create seasonal tasks when they remember",
      "Track seasonal tasks in a separate spreadsheet",
      "Use Action Plan Templates with date-based triggers to automatically schedule seasonal tasks",
      "Use optional visit notes to remind reps"
    ],
    "answer": 2,
    "explanation": "Overall explanation Date-based Action Plan Templates automate seasonal work and ensure timeliness. Manual reminders, spreadsheets, or optional notes lack control and reporting."
  },
  {
    "question": "A sales director wants to track completion of critical compliance tasks for every new key account onboarding and generate escalation if tasks are missed. What configuration should be used?",
    "options": [
      "Ask supervisors to review compliance manually",
      "Use Action Plans with milestone tracking and reporting to monitor compliance task completion",
      "Depend on monthly check-ins for missed tasks",
      "Add ad hoc tasks only when issues occur"
    ],
    "answer": 1,
    "explanation": "Overall explanation Action Plans with milestone tracking provide visibility, automation, and reporting on critical tasks, unlike manual review or ad hoc task creation, which is reactive."
  },
  {
    "question": "A product launch team wants reps to execute specific merchandising and training tasks during the first two weeks of launch and then automatically transition to maintenance tasks after. What is the best approach?",
    "options": [
      "Use one static task list for the entire launch period",
      "Ask reps to manually switch from launch tasks to maintenance tasks",
      "Create phased Action Plan Templates with timeline-based triggers",
      "Track maintenance activities separately in Excel"
    ],
    "answer": 2,
    "explanation": "Overall explanation Phased templates ensure automation and proper task sequencing, unlike static lists, manual transitions, or offline tracking that risk incomplete execution."
  },
  {
    "question": "A compliance officer requires separate review steps for safety audits that differ from standard store visit tasks. How should this be implemented?",
    "options": [
      "Use the same Action Plan for all audits",
      "Add safety steps manually every time an audit occurs",
      "Require reps to note safety audits in free text",
      "Create a dedicated Safety Audit Action Plan Template with unique tasks"
    ],
    "answer": 3,
    "explanation": "Overall explanation A dedicated template ensures structured and repeatable safety audit tasks. Generic plans, manual additions, or free-text entries risk inconsistent compliance and missed steps. Top of Form"
  },
  {
    "question": "A CPG company wants to create a separate “New Product Education” action plan exclusively for reps visiting flagship stores during launch events. What’s the best setup?",
    "options": [
      "Add education tasks to the standard visit template",
      "Use free-text instructions in rep notes",
      "Depend on email reminders for education tasks",
      "Create a dedicated Action Plan Template linked to flagship store visits during launch events"
    ],
    "answer": 3,
    "explanation": "Overall explanation Dedicated templates ensure structured education tasks for flagship launches, unlike generic templates, notes, or email reminders that are easy to miss."
  },
  {
    "question": "A sales VP wants to ensure that new hire onboarding plans include a checklist of store visit training tasks. What is the most efficient solution?",
    "options": [
      "Use Action Plan Templates linked to employee onboarding records",
      "Track new hire onboarding tasks in spreadsheets",
      "Ask team leads to define onboarding tasks individually",
      "Provide onboarding details informally over calls"
    ],
    "answer": 0,
    "explanation": "Overall explanation Linking Action Plans to onboarding records standardizes training steps and automates task creation. Spreadsheets, informal calls, or team-lead defined tasks are inconsistent and error-prone."
  },
  {
    "question": "A distributor wants to automate equipment installation tasks whenever a store purchases refrigeration units. What is the best approach?",
    "options": [
      "Use Action Plan Templates tied to refrigeration unit purchase records",
      "Ask reps to create installation tasks manually",
      "Depend on post-purchase phone calls for instructions",
      "Log equipment installation only after completion"
    ],
    "answer": 0,
    "explanation": "Overall explanation Action Plans linked to purchase events ensure installation tasks are triggered automatically. Manual task creation, calls, or post-completion logging are inefficient and reactive."
  },
  {
    "question": "A retailer wants to automatically assign different planograms to stores based on their square footage and category assortment. What is the best configuration?",
    "options": [
      "Create one generic planogram for all stores",
      "Use Planogram Templates with rules based on store attributes like size and assortment",
      "Require reps to choose the right planogram manually during visits",
      "Use spreadsheets to track planogram allocation"
    ],
    "answer": 1,
    "explanation": "Overall explanation Planogram Templates with attribute-based rules automate the correct assignment based on store data, ensuring consistency. Manual selection, generic templates, or spreadsheets risk mismatches and errors."
  },
  {
    "question": "A category manager wants planograms to dynamically update whenever product packaging dimensions change. How should this be achieved?",
    "options": [
      "Require manual updates to each planogram after packaging changes",
      "Use dynamic product dimension fields linked to Planogram Templates for automatic updates",
      "Export planograms to Excel and update offline",
      "Use Chatter posts to inform reps about packaging changes"
    ],
    "answer": 1,
    "explanation": "Overall explanation Linking dynamic product dimensions to planograms ensures automated updates. Manual changes, offline Excel work, or simple notifications lack automation and risk outdated execution."
  },
  {
    "question": "A CPG company wants to analyze compliance by comparing expected shelf layouts with photos taken during store visits. What is the recommended setup?",
    "options": [
      "Have reps visually inspect shelves without photo evidence",
      "Compare shelf layouts manually after visits",
      "Enable Planogram Compliance Checks with photo capture linked to Planogram Templates",
      "Use optional comments in visit notes to describe shelf conditions"
    ],
    "answer": 2,
    "explanation": "Overall explanation Planogram Compliance Checks with photos provide structured, auditable evidence. Manual visual inspections, optional comments, or manual comparisons are subjective and harder to audit."
  },
  {
    "question": "A merchandising team wants to track seasonal planograms (e.g., holiday or summer layouts) separately from standard layouts. What is the best practice?",
    "options": [
      "Replace the main planogram each season and restore later",
      "Track seasonal changes manually in spreadsheets",
      "Use seasonal Planogram Templates with version control to track changes separately",
      "Include seasonal instructions only as free-text in visit tasks"
    ],
    "answer": 2,
    "explanation": "Overall explanation Seasonal Planogram Templates with version control allow clear historical tracking and quick switching. Manual tracking or overwriting main planograms causes data loss and confusion."
  },
  {
    "question": "A field operations manager needs to push planogram updates instantly to field reps’ mobile devices when layouts change. What should be configured?",
    "options": [
      "Ask reps to manually check for updates each week",
      "Use Salesforce mobile synchronization with real-time planogram updates",
      "Use monthly printed planogram guides",
      "Rely on word-of-mouth updates"
    ],
    "answer": 1,
    "explanation": "Overall explanation Real-time mobile sync ensures reps always have the latest layouts, unlike manual checks, printed guides, or informal updates, which delay execution."
  },
  {
    "question": "A retailer wants to define different shelf positioning rules for high-margin products and automatically reflect them in planograms. What is the most efficient way?",
    "options": [
      "Define placement rules manually in spreadsheets",
      "Adjust shelf positions ad hoc based on rep discretion",
      "Configure rule-driven shelf placement within Planogram Templates",
      "Ignore placement and focus only on SKU count"
    ],
    "answer": 2,
    "explanation": "Overall explanation Rule-driven placement in templates ensures consistent execution for strategic products. Manual spreadsheets, rep discretion, or ignoring positioning lead to inconsistent outcomes."
  },
  {
    "question": "A company needs to manage complex planograms that include cross-merchandising of complementary products (e.g., chips and dips). How can this be achieved?",
    "options": [
      "Use one generic planogram for all product combinations",
      "Capture cross-merchandising data manually during visits",
      "Create a separate planogram for each possible combination manually",
      "Use advanced Planogram Templates supporting cross-merchandising relationships"
    ],
    "answer": 3,
    "explanation": "Overall explanation Advanced templates supporting cross-merchandising automate complex layouts, unlike generic templates, manual data capture, or creating multiple one-off planograms."
  },
  {
    "question": "A retailer wants planogram effectiveness reports segmented by product category and store cluster type. How should this be configured?",
    "options": [
      "Review planograms visually and estimate effectiveness",
      "Use basic store visit notes to summarize performance",
      "Ignore segmentation and focus only on overall compliance",
      "Enable Planogram Reporting with category and cluster filters in dashboards"
    ],
    "answer": 3,
    "explanation": "Overall explanation Native reporting with segmentation provides actionable insights, unlike visual reviews, basic notes, or ignoring segmentation entirely."
  },
  {
    "question": "A brand manager wants to apply unique planograms for flagship stores that have additional display fixtures not present in regular outlets. What is the most efficient configuration?",
    "options": [
      "Use Action Plan Templates instead of planograms",
      "Create a dedicated flagship Planogram Template reflecting unique fixtures",
      "Require reps to modify standard layouts during each visit",
      "Keep flagship fixtures unmanaged in Salesforce"
    ],
    "answer": 0,
    "explanation": "Overall explanation Dedicated flagship templates handle store-specific layouts efficiently, unlike rep manual modifications or ignoring unique fixtures. Action Plan Templates are not designed for layout control"
  },
  {
    "question": "A CPG company wants to ensure that discontinued products are automatically removed from active planograms. What is the recommended setup?",
    "options": [
      "Have reps manually adjust planograms to remove discontinued products",
      "Use automated product status fields linked to planogram rules to remove discontinued SKUs",
      "Notify store managers verbally about discontinued products",
      "Review planograms quarterly for updates"
    ],
    "answer": 1,
    "explanation": "Overall explanation Linking product status fields to planograms automates SKU removal, ensuring real-time accuracy. Manual adjustments, verbal notifications, or infrequent reviews risk non-compliance."
  },
  {
    "question": "A company needs to onboard 5,000 new SKUs across multiple categories while maintaining price tiers and promotional eligibility. What is the best approach?",
    "options": [
      "Manually create each SKU record one by one in Salesforce",
      "Use Data Loader or API integration to bulk import products with pre-defined price tier and promotional eligibility fields",
      "Create a single product and duplicate it repeatedly for each SKU",
      "Enter product details in a spreadsheet and email to the admin for upload"
    ],
    "answer": 1,
    "explanation": "Overall explanation Bulk import using Data Loader or API ensures accurate and scalable product creation while maintaining data integrity. Manual entry, duplication, or emailing spreadsheets introduces delays and risk of errors."
  },
  {
    "question": "A product manager wants each product record to include seasonal availability (e.g., winter-only products) and prevent reps from ordering out-of-season SKUs. What is the correct configuration?",
    "options": [
      "Add a note to the product description field for seasonal products",
      "Use product availability fields and validation rules to restrict orders outside of the season",
      "Train reps to manually check seasonal lists before ordering",
      "Send seasonal emails as reminders"
    ],
    "answer": 1,
    "explanation": "Overall explanation Availability fields combined with validation rules automate order restriction and prevent errors. Notes, training, or email reminders depend on human memory and are unreliable."
  },
  {
    "question": "A retailer wants to ensure product hierarchies (e.g., category → subcategory → SKU) are consistent across all business units. What is the best practice?",
    "options": [
      "Allow each business unit to define its own product hierarchy",
      "Use free-text fields to document hierarchy on each product",
      "Define a global Product Hierarchy object and enforce consistency with dependent picklists or data validation",
      "Manage hierarchy outside Salesforce using spreadsheets"
    ],
    "answer": 2,
    "explanation": "Overall explanation A global Product Hierarchy ensures data consistency across all units, unlike free-text fields, independent unit structures, or external spreadsheets that are error-prone and disconnected."
  },
  {
    "question": "A CPG company needs to track product packaging changes (e.g., size, material) historically to analyze their impact on sales. What is the best configuration?",
    "options": [
      "Overwrite existing product fields with new packaging details",
      "Document packaging changes manually in Chatter posts",
      "Use a related Packaging object with version control to track changes over time",
      "Track packaging changes on paper for archival purposes"
    ],
    "answer": 2,
    "explanation": "Overall explanation A related object with version control maintains historical records and allows impact analysis, unlike overwriting fields, manual Chatter posts, or paper archives which lack traceability."
  },
  {
    "question": "A distributor wants product records to automatically inherit default tax classifications based on category when created. What is the recommended approach?",
    "options": [
      "Have users manually add tax classification when creating each product",
      "Use record-triggered automation (Flow or Apex) to assign tax classifications based on product category",
      "Add tax classification as optional fields for reps to fill later",
      "Handle classification updates only during audits"
    ],
    "answer": 1,
    "explanation": "Overall explanation Automating tax classification ensures data accuracy at creation time. Manual entry, optional fields, or post-audit updates increase compliance risk and require extra effort."
  },
  {
    "question": "A sales team wants to restrict discontinued products from appearing in active price books while retaining historical order data. What is the best solution?",
    "options": [
      "Delete discontinued product records from Salesforce",
      "Flag products as inactive but leave them in price books",
      "Use a product status field and automation to remove discontinued products from active price books while keeping historical data intact",
      "Leave discontinued products available and rely on reps not to order them"
    ],
    "answer": 2,
    "explanation": "Overall explanation Automated product status management ensures discontinued items are unavailable for ordering while preserving historical references. Deletion or relying on reps to avoid ordering risks data loss and operational errors."
  },
  {
    "question": "A manufacturer sells bundled products (e.g., beverage cooler with branded cups). How should these bundles be set up to ensure accurate pricing and inventory tracking?",
    "options": [
      "Treat each bundle as a single SKU with no breakdown",
      "Ask reps to manually calculate bundle pricing",
      "Create a new product record for each unique bundle configuration",
      "Use product bundle features (e.g., parent-child product relationships) for automated pricing and inventory allocation"
    ],
    "answer": 3,
    "explanation": "Overall explanation Product bundle features manage pricing and inventory at both parent and child levels, unlike manual or single-SKU approaches which lose detail and flexibility."
  },
  {
    "question": "A CPG company wants to assign multiple barcodes (UPC/EAN) to a single product for different regions but still maintain one master product record. What is the best setup?",
    "options": [
      "Create duplicate products for each barcode",
      "Track barcodes in spreadsheets separate from Salesforce",
      "Store multiple barcodes as a related object linked to the master product record",
      "Use free-text notes for each barcode variant"
    ],
    "answer": 2,
    "explanation": "Overall explanation Using a related object for barcodes maintains one master product record while supporting regional variations. Duplicating products or using spreadsheets/notes causes data fragmentation and poor reporting."
  },
  {
    "question": "A global brand wants to create different product attribute sets (e.g., “Nutritional Info” for food, “Material Composition” for apparel) but keep all products within one catalog. What is the correct configuration?",
    "options": [
      "Use Action Plans to manage different attribute sets",
      "Use Product Attribute Groups with conditional visibility based on product type",
      "Create separate Salesforce orgs for each product type",
      "Add all attributes as optional fields on the same layout"
    ],
    "answer": 1,
    "explanation": "Overall explanation Product Attribute Groups allow targeted attributes per product type within one catalog, unlike using Action Plans (not intended for attributes), separate orgs, or cluttered optional fields."
  },
  {
    "question": "A merchandising team wants new SKUs automatically added to specific Planograms when introduced. What is the best approach?",
    "options": [
      "Link Product Setup with Planogram Templates using automation",
      "Manually assign new products to Planograms each time",
      "Ask reps to add products during visits",
      "Wait until quarterly reviews to update Planograms"
    ],
    "answer": 0,
    "explanation": "Overall explanation Automation ensures new SKUs are added to planograms instantly, unlike manual assignment, rep-dependent updates, or delayed quarterly changes which risk execution gaps."
  },
  {
    "question": "A regional manager needs to measure On-Shelf Availability (OSA) daily and compare it across different store clusters. What is the best approach?",
    "options": [
      "Manually check shelves and record OSA percentages on paper",
      "Configure KPI Definitions for OSA and link them to store clusters for automated data capture",
      "Use rep feedback via email for OSA metrics",
      "Only review OSA annually"
    ],
    "answer": 1,
    "explanation": "Overall explanation KPI Definitions automate OSA tracking by cluster, enabling real-time insights. Manual paper checks, email feedback, or annual reviews lack accuracy and speed."
  },
  {
    "question": "A chain retailer wants to monitor planogram compliance KPIs and automatically trigger alerts when compliance falls below 85%. What configuration should be used?",
    "options": [
      "Review compliance quarterly using manual reports",
      "Use KPI targets with thresholds and enable alert workflows when compliance falls below 85%",
      "Have reps self-report compliance without validation",
      "Ignore compliance metrics and focus only on sales"
    ],
    "answer": 1,
    "explanation": "Overall explanation KPI targets and alerts provide automated monitoring, unlike manual quarterly checks, unvalidated self-reporting, or ignoring compliance entirely."
  },
  {
    "question": "A merchandising director wants to track product freshness (expiry date adherence) across stores and link it to supplier performance. How should this be implemented?",
    "options": [
      "Track expiry adherence verbally with store managers",
      "Rely on suppliers to report their own freshness performance",
      "Create a custom KPI for product freshness and link it to supplier records for correlation analysis",
      "Ignore freshness and only monitor product pricing"
    ],
    "answer": 2,
    "explanation": "Overall explanation A custom KPI tied to supplier records enables data-driven performance analysis. Verbal tracking, self-reporting by suppliers, or ignoring freshness are unreliable and incomplete."
  },
  {
    "question": "A national brand wants to benchmark promotion execution quality by comparing multiple KPI metrics (e.g., signage visibility, shelf placement) across regions. What is the best approach?",
    "options": [
      "Use region-specific spreadsheets for KPI tracking",
      "Review promotions informally during field visits",
      "Configure composite KPI dashboards aggregating multiple execution metrics",
      "Focus only on sales uplift without execution context"
    ],
    "answer": 2,
    "explanation": "Overall explanation Composite KPI dashboards deliver multi-metric benchmarking, unlike spreadsheets, informal visits, or focusing solely on sales uplift which lacks execution detail."
  },
  {
    "question": "A retailer wants to automatically calculate revenue per square foot (RPSF) as a KPI for every store. How should this be configured?",
    "options": [
      "Have reps manually compute RPSF and enter it weekly",
      "Use formula fields or KPI calculations combining revenue and store size attributes",
      "Only track total revenue without factoring store size",
      "Rely on external accounting software for RPSF"
    ],
    "answer": 1,
    "explanation": "Overall explanation Automated KPI calculation using formula fields ensures accurate and continuous RPSF tracking. Manual calculations, ignoring store size, or relying solely on external tools is inefficient."
  },
  {
    "question": "A CPG company wants to analyze shelf share percentage for each brand within a category and compare it across time periods. What is the best practice?",
    "options": [
      "Manually measure shelf space and record results in Excel",
      "Use rep estimates during store visits",
      "Configure Shelf Share KPIs with historical trend reporting enabled",
      "Only measure shelf share annually"
    ],
    "answer": 2,
    "explanation": "Overall explanation Shelf Share KPIs with historical reporting automate tracking and enable trend analysis. Manual Excel work, estimates, or annual measurement are inaccurate and outdated."
  },
  {
    "question": "A brand manager wants to analyze execution KPIs for cross-merchandising displays (e.g., chips and soda together). What configuration is recommended?",
    "options": [
      "Use a generic compliance KPI not linked to specific displays",
      "Ask reps to note cross-merchandising informally",
      "Ignore cross-merchandising KPIs altogether",
      "Define specific KPIs for cross-merchandising execution and link them to related products and display locations"
    ],
    "answer": 3,
    "explanation": "Overall explanation Defining specific KPIs for cross-merchandising ensures measurable, actionable insights, unlike generic KPIs, informal notes, or ignoring the concept entirely."
  },
  {
    "question": "A territory lead needs KPI reporting segmented by high-priority versus low-priority stores. What is the correct configuration?",
    "options": [
      "Use a single KPI report for all stores without segmentation",
      "Segment stores manually in Excel and map KPIs separately",
      "Ignore store priority while calculating KPIs",
      "Use KPI reporting filters based on store priority attributes"
    ],
    "answer": 3,
    "explanation": "Overall explanation KPI reporting filters automate segmentation by store priority, unlike single unsegmented reports, manual Excel processes, or ignoring priority attributes."
  },
  {
    "question": "A retailer wants to integrate external foot traffic data with in-store sales KPIs to measure conversion rate. What is the best approach?",
    "options": [
      "Ask store managers to guess foot traffic",
      "Track only in-store sales without foot traffic",
      "Use integrated external foot traffic data and combine it with sales data for KPI conversion calculations",
      "Review foot traffic only at year-end"
    ],
    "answer": 2,
    "explanation": "Overall explanation Integrating external foot traffic data provides accurate conversion KPIs, unlike guessing traffic, ignoring it, or reviewing annually."
  },
  {
    "question": "A CPG company wants to track planogram compliance score alongside average revenue uplift as a combined KPI index. How can this be configured?",
    "options": [
      "Use separate spreadsheets for compliance and revenue",
      "Track only revenue uplift and ignore compliance",
      "Create an index KPI combining compliance and revenue scores through a calculated metric",
      "Request reps to manually average the two numbers"
    ],
    "answer": 2,
    "explanation": "Overall explanation An index KPI combines multiple measures automatically, ensuring accuracy and scalability, unlike spreadsheets, ignoring one metric, or relying on manual calculations."
  },
  {
    "question": "A global sales team is experiencing performance issues due to large data volumes in Consumer Goods Cloud. Which solution optimizes query performance?",
    "options": [
      "Increase the number of reports run simultaneously",
      "Enable skinny tables and leverage indexed fields for high-volume objects",
      "Use only dashboard snapshots for historical data",
      "Rely on exporting data to Excel for analysis"
    ],
    "answer": 1,
    "explanation": "Overall explanation Skinny tables and indexed fields improve query performance for large datasets. Running simultaneous reports or relying on offline Excel adds load and removes real-time capabilities. Dashboard snapshots provide visuals but do not optimize actual queries."
  },
  {
    "question": "A CPG company wants to secure mobile data access for field reps using Consumer Goods Cloud mobile app. Which approach meets best practices?",
    "options": [
      "Disable mobile access for all users",
      "Implement Mobile Device Management (MDM) and configure session-based security policies",
      "Allow unrestricted access for all devices",
      "Rely on user training instead of technical controls"
    ],
    "answer": 1,
    "explanation": "Overall explanation MDM with session security ensures device compliance, unlike unrestricted access or relying on training, which poses high security risks. Disabling mobile access is counterproductive to field operations."
  },
  {
    "question": "A business wants to automate territory assignment based on store location and rep availability. What is the best configuration?",
    "options": [
      "Use static assignment maintained manually",
      "Reassign territories once a year",
      "Leverage Salesforce automation with Territory Management and custom assignment rules",
      "Ask reps to choose territories themselves"
    ],
    "answer": 2,
    "explanation": "Overall explanation Territory Management with automated assignment rules ensures dynamic, accurate distribution of workloads. Manual updates or self-selection by reps lead to errors and delays."
  },
  {
    "question": "A retailer wants to integrate IoT sensors for real-time shelf monitoring with Salesforce. What is the best approach?",
    "options": [
      "Use manual data imports from IoT logs weekly",
      "Depend on store visits to collect shelf data",
      "Build an API integration leveraging Salesforce Platform Events for real-time IoT data ingestion",
      "Upload IoT data as Excel files monthly"
    ],
    "answer": 2,
    "explanation": "Overall explanation Platform Events handle real-time IoT data ingestion efficiently, unlike manual imports or monthly Excel updates, which are slow and lack automation."
  },
  {
    "question": "A consumer goods company wants to ensure regulatory compliance by automatically encrypting sensitive customer data. What is the best configuration?",
    "options": [
      "Store sensitive data unencrypted and rely on VPN access",
      "Use Salesforce Shield Platform Encryption for fields containing sensitive information",
      "Rely only on standard Salesforce field-level security",
      "Require users to manually encrypt data before entry"
    ],
    "answer": 1,
    "explanation": "Overall explanation Shield Platform Encryption ensures automatic and regulatory-compliant encryption. VPN reliance, standard field-level security alone, or manual encryption does not meet compliance standards."
  },
  {
    "question": "A company needs to provide different sets of KPIs to users based on their job role without duplicating dashboards. How should this be implemented?",
    "options": [
      "Build one dashboard for all users with all KPIs visible",
      "Share KPI Excel files based on job roles",
      "Use dynamic dashboards with role-based filters",
      "Create separate orgs for each role type"
    ],
    "answer": 2,
    "explanation": "Overall explanation Dynamic dashboards with role-based filters provide tailored visibility without duplication. Excel files and separate orgs add unnecessary complexity, while one dashboard for all users reduces usability."
  },
  {
    "question": "A field operations manager wants to use geolocation-based automation to assign tasks to reps when they enter a store perimeter. How can this be achieved?",
    "options": [
      "Ask reps to manually log tasks when entering stores",
      "Use location tracking outside Salesforce and manually upload logs",
      "Enable geolocation fields without automation",
      "Leverage Salesforce mobile geolocation triggers and Flow automation to auto-create tasks"
    ],
    "answer": 3,
    "explanation": "Overall explanation Geolocation triggers and automation in Salesforce create tasks dynamically, unlike manual logging or passive location fields that don’t trigger actions. External tracking adds complexity and latency."
  },
  {
    "question": "A global brand wants to integrate their ERP system with Salesforce for seamless product and pricing updates in near real-time. What solution meets best practices?",
    "options": [
      "Export ERP data weekly and manually import it into Salesforce",
      "Use nightly batch integrations via CSV",
      "Only update pricing when changes are requested by users",
      "Implement middleware (e.g., MuleSoft) for near real-time integration between ERP and Salesforce"
    ],
    "answer": 3,
    "explanation": "Overall explanation Middleware ensures scalable, near real-time ERP integration, unlike manual exports, nightly batches, or user-triggered updates, which delay critical pricing data synchronization."
  },
  {
    "question": "A business wants to monitor API usage limits proactively to avoid hitting daily limits. What should be configured?",
    "options": [
      "Ignore API usage limits since Salesforce auto-adjusts",
      "Rely on admin email notifications only after limits are reached",
      "Use Salesforce’s built-in system overview dashboard and set up proactive monitoring with custom alerts",
      "Restrict all API integrations permanently"
    ],
    "answer": 2,
    "explanation": "Overall explanation System overview monitoring with proactive alerts prevents API limit overruns, unlike ignoring limits or waiting for failure notifications. Disabling APIs altogether defeats integration capabilities."
  },
  {
    "question": "A retailer wants to manage changes across multiple sandboxes and production consistently while reducing risk. Which approach meets best practices?",
    "options": [
      "Make all changes directly in production",
      "Create ad-hoc changes per sandbox without version control",
      "Use change sets with automated deployment pipelines and governance processes",
      "Avoid testing changes in lower environments"
    ],
    "answer": 2,
    "explanation": "Overall explanation Using change sets with deployment pipelines ensures controlled, test-driven releases, unlike ad-hoc or direct production changes, which increase risk and reduce traceability."
  },
  {
    "question": "A field manager wants visits automatically generated based on frequency (e.g., weekly) and store priority. What is the best solution?",
    "options": [
      "Have reps create visits manually for each store",
      "Use Visit Frequency and Store Priority rules to auto-generate visit schedules",
      "Build a single schedule and apply it to all stores regardless of priority",
      "Use spreadsheets to track visit needs"
    ],
    "answer": 1,
    "explanation": "Overall explanation Auto-generating visits based on frequency and store priority ensures efficiency and focus on key accounts, unlike manual creation, generic schedules, or external spreadsheets that risk errors."
  },
  {
    "question": "A company wants to balance rep workloads by distributing visits evenly across all field reps in a region. Which approach should be used?",
    "options": [
      "Assign visits manually without considering workload",
      "Use territory assignment rules combined with auto-scheduling for balanced workload",
      "Let reps decide which stores to visit",
      "Ignore workload balance and focus only on high-volume stores"
    ],
    "answer": 1,
    "explanation": "Overall explanation Territory rules with auto-scheduling ensure equitable workloads, unlike manual assignments or leaving store selection to reps, which may cause inefficiencies and bias."
  },
  {
    "question": "A sales director wants to optimize routes so that reps spend less time driving and more time at stores. What should be configured?",
    "options": [
      "Allow reps to manually pick their own routes each morning",
      "Only visit stores in alphabetical order",
      "Use Salesforce Maps route optimization integrated with Visit Planning",
      "Provide reps with static maps printed weekly"
    ],
    "answer": 2,
    "explanation": "Overall explanation Route optimization via Salesforce Maps reduces travel time significantly, unlike manual route selection, alphabetical sequences, or static printed maps, which are inefficient and outdated."
  },
  {
    "question": "A territory lead needs to schedule visits for seasonal promotions without disrupting existing recurring visits. What is the best approach?",
    "options": [
      "Cancel all existing visits and recreate them with promotion tasks",
      "Schedule seasonal promotion visits manually as needed",
      "Use ad-hoc Visit Plans layered on top of recurring schedules",
      "Instruct reps to adjust their visit notes for seasonal tasks"
    ],
    "answer": 2,
    "explanation": "Overall explanation Layering ad-hoc visits allows promotion coverage without impacting recurring visits, unlike cancelling schedules, manual handling, or relying on notes which reduce consistency."
  },
  {
    "question": "A consumer goods company wants to ensure new high-priority accounts get immediate initial visits within 48 hours of onboarding. What configuration is recommended?",
    "options": [
      "Add accounts to the next available monthly cycle",
      "Use automation to trigger initial visit creation upon account onboarding",
      "Wait until reps are free to schedule new visits manually",
      "Focus only on existing accounts and onboard later"
    ],
    "answer": 1,
    "explanation": "Overall explanation Automation ensures immediate coverage for high-priority new accounts, unlike monthly cycles, manual scheduling, or deprioritizing new accounts which delay engagement."
  },
  {
    "question": "A regional sales manager wants to dynamically reprioritize visits based on store performance metrics (e.g., declining sales trend). How can this be achieved?",
    "options": [
      "Update visit priority annually based on historic sales",
      "Have reps call managers for real-time updates",
      "Use performance-based scoring linked to visit prioritization automation",
      "Keep visit priorities static for simplicity"
    ],
    "answer": 2,
    "explanation": "Overall explanation Linking performance metrics to prioritization allows adaptive scheduling, unlike static or manual processes which can’t respond quickly to changes in store performance."
  },
  {
    "question": "A field supervisor wants real-time visibility into rep adherence to visit schedules and missed visits. What is the recommended configuration?",
    "options": [
      "Have reps email daily updates on completed visits",
      "Use optional Chatter posts for missed visits",
      "Review visit schedules only at the end of the month",
      "Enable real-time visit tracking dashboards and missed-visit alerts"
    ],
    "answer": 3,
    "explanation": "Overall explanation Real-time dashboards and alerts provide immediate visibility and corrective action, unlike emails, Chatter posts, or monthly reviews which are delayed and incomplete."
  },
  {
    "question": "A consumer goods company wants to integrate weather forecast data to dynamically reschedule visits impacted by severe conditions. How can this be accomplished?",
    "options": [
      "Manually review weather websites and inform reps",
      "Reschedule visits only after complaints from reps",
      "Ignore weather factors in scheduling",
      "Integrate external weather API with Visit Planning automation to adjust schedules"
    ],
    "answer": 3,
    "explanation": "Overall explanation Automating rescheduling with weather API integration prevents productivity loss and safety risks, unlike manual checks, reactive rescheduling, or ignoring weather impact."
  },
  {
    "question": "A brand manager wants to ensure that reps visiting flagship stores spend extra time performing detailed merchandising checks. How can this be configured?",
    "options": [
      "Create a generic visit task for all stores",
      "Use store attribute flags to trigger extended merchandising tasks for flagship store visits",
      "Let reps decide how much time to spend per store",
      "Assign merchandising tasks only if issues are reported"
    ],
    "answer": 1,
    "explanation": "Overall explanation Attribute-driven tasks ensure flagship stores receive special attention, unlike generic tasks, rep discretion, or reactive issue handling which may miss key opportunities."
  },
  {
    "question": "A team lead wants to restrict visit planning to ensure reps can only schedule visits within their assigned territories. What’s the correct configuration?",
    "options": [
      "Allow reps to plan visits anywhere",
      "Ask reps to follow informal territory guidelines",
      "Use Salesforce Flow to restrict visit scheduling outside assigned territories",
      "Ignore territory restrictions for flexibility"
    ],
    "answer": 2,
    "explanation": "Overall explanation Flow-based restrictions enforce compliance with territory assignments, unlike informal guidelines or unrestricted planning, which may cause coverage conflicts."
  },
  {
    "question": "A retailer needs to sync product price updates from their ERP system to Salesforce in near real-time to avoid price discrepancies. Which integration approach is best?",
    "options": [
      "Export ERP pricing data daily as CSV and upload manually",
      "Use middleware (e.g., MuleSoft) to sync ERP pricing with Salesforce in near real-time",
      "Build custom Apex jobs to pull prices nightly",
      "Rely on field reps to update prices manually"
    ],
    "answer": 1,
    "explanation": "Overall explanation Middleware enables near real-time synchronization and scalability. Manual CSV uploads, nightly jobs, or manual updates delay pricing accuracy and risk errors."
  },
  {
    "question": "A CPG company needs to exchange large volumes of historical sales data with Salesforce for analytics. What integration approach is recommended?",
    "options": [
      "Use standard REST API calls for all historical data loads",
      "Use Bulk API or Bulk API 2.0 for high-volume data exchange",
      "Use nightly file exports handled manually",
      "Load one month at a time using Data Loader interactively"
    ],
    "answer": 1,
    "explanation": "Overall explanation Bulk API is optimized for high-volume data transfers, unlike REST API or manual exports, which are slow and resource-intensive."
  },
  {
    "question": "A brand wants to track delivery truck GPS data in Salesforce for real-time visit planning optimization. Which integration solution is best?",
    "options": [
      "Import truck location data weekly via spreadsheets",
      "Ask drivers to manually update their location in Salesforce",
      "Use a streaming API integration to capture GPS data in real time",
      "Rely on call-in check-ins from drivers"
    ],
    "answer": 2,
    "explanation": "Overall explanation Streaming API handles real-time GPS data ingestion efficiently, unlike weekly spreadsheets, manual entry, or phone calls that delay decision-making."
  },
  {
    "question": "A distributor wants to capture IoT-enabled cooler temperature data in Salesforce for product quality monitoring. What integration approach is ideal?",
    "options": [
      "Upload temperature readings monthly via CSV",
      "Use email notifications from IoT devices and manually log them",
      "Integrate IoT platform with Salesforce using Platform Events for near real-time temperature alerts",
      "Store cooler data in spreadsheets for quarterly review"
    ],
    "answer": 2,
    "explanation": "Overall explanation Platform Events enable near real-time IoT data ingestion and proactive monitoring, unlike monthly uploads, email/manual logging, or spreadsheets which are delayed and error-prone."
  },
  {
    "question": "A retailer wants to ensure inventory stock levels are updated automatically between Salesforce and their warehouse management system (WMS). Which is the best practice?",
    "options": [
      "Have store managers update stock levels manually",
      "Use bidirectional API integration to sync Salesforce and WMS in real time",
      "Sync data manually at the end of each day",
      "Upload weekly inventory snapshots"
    ],
    "answer": 1,
    "explanation": "Overall explanation Bidirectional API integration ensures real-time stock visibility, preventing out-of-stock issues. Manual or periodic updates risk inventory inaccuracies."
  },
  {
    "question": "A multinational brand needs to push updated route plans from Salesforce to a third-party field service app dynamically. Which integration solution is most efficient?",
    "options": [
      "Email updated route plans to field reps daily",
      "Export plans weekly and upload to the third-party system manually",
      "Use an outbound message or API integration triggered by route plan changes",
      "Allow reps to manage routes manually in the third-party system"
    ],
    "answer": 2,
    "explanation": "Overall explanation Outbound messaging or API integration ensures dynamic updates without manual intervention, unlike emails, manual exports, or rep-managed routing."
  },
  {
    "question": "A company wants to automate sending promotion approvals from Salesforce to a legacy approval system. Which integration approach is best?",
    "options": [
      "Send approvals via email and log manually in the legacy system",
      "Require reps to enter promotion approvals into both systems",
      "Ignore integration and use Salesforce as the sole approval system",
      "Build a middleware-driven API integration to push approved promotions to the legacy system automatically"
    ],
    "answer": 3,
    "explanation": "Overall explanation Middleware-driven API integration automates promotion approval syncing, unlike emails, manual dual entry, or ignoring integration entirely."
  },
  {
    "question": "A brand wants to consolidate POS data from multiple retailers into Salesforce for analytics. What integration architecture is recommended?",
    "options": [
      "Rely on each retailer emailing spreadsheets weekly",
      "Import POS data manually each day",
      "Handle POS integration per retailer separately with no common standard",
      "Use an ETL process with standardized data mapping into Salesforce"
    ],
    "answer": 3,
    "explanation": "Overall explanation ETL with standardized mapping centralizes and automates POS data ingestion, unlike manual uploads or disparate integrations which increase complexity and reduce data consistency."
  },
  {
    "question": "A consumer goods company needs to expose Salesforce promotion data to external partners securely. Which integration approach is best?",
    "options": [
      "Provide partners with Salesforce login credentials",
      "Use email attachments to share promotion data weekly",
      "Create a public website with open access",
      "Use Salesforce Connected Apps and secure APIs with OAuth authentication"
    ],
    "answer": 3,
    "explanation": "Overall explanation Connected Apps with OAuth provides secure controlled data sharing. Public websites, email attachments, or shared logins are insecure and non-compliant."
  },
  {
    "question": "A field team wants to retrieve product images hosted in a third-party DAM (Digital Asset Management) system in Salesforce mobile app. Which integration method is recommended?",
    "options": [
      "Manually upload all product images into Salesforce weekly",
      "Provide a shared drive link for reps to download images",
      "Build a nightly data sync for image URLs only",
      "Use external object integration to access images dynamically from DAM"
    ],
    "answer": 3,
    "explanation": "Overall explanation External object integration dynamically references DAM images without storing duplicates, unlike manual uploads, shared drives, or static nightly syncs."
  },
  {
    "question": "A sales director wants real-time dashboards to track in-store visit completion rates segmented by region. Which solution is recommended?",
    "options": [
      "Create static PDF reports and email them daily",
      "Use dynamic dashboards with regional filters and real-time data refresh",
      "Use Excel to track visit completion offline",
      "Schedule monthly PowerPoint summaries"
    ],
    "answer": 1,
    "explanation": "Overall explanation Dynamic dashboards allow live data views segmented by region, unlike static PDFs, offline Excel tracking, or monthly presentations which lack real-time insights."
  },
  {
    "question": "A CPG manager wants to forecast product demand based on historical sales trends and seasonality. Which analytics solution is best?",
    "options": [
      "Build forecasts manually in spreadsheets",
      "Use Einstein Discovery to model demand using historical and seasonal factors",
      "Only track last month's sales in a report",
      "Ask reps to guess future demand"
    ],
    "answer": 1,
    "explanation": "Overall explanation Einstein Discovery leverages machine learning for predictive analytics, outperforming manual spreadsheets, one-month reporting, or human guesswork which lacks accuracy."
  },
  {
    "question": "A territory manager wants to measure promotion effectiveness by comparing sales uplift with baseline sales across different product categories. What should be configured?",
    "options": [
      "Use static promotion PDFs and manually compare sales",
      "Use single metric dashboards for overall sales only",
      "Create a multi-metric dashboard with promotion KPIs linked to category-level sales data",
      "Perform ad hoc manual comparisons quarterly"
    ],
    "answer": 2,
    "explanation": "Overall explanation A multi-metric dashboard with category-level data enables granular promotion effectiveness analysis, unlike static PDFs or single metric dashboards which lack depth."
  },
  {
    "question": "A brand owner needs to analyze the impact of planogram compliance on revenue across stores. What’s the recommended approach?",
    "options": [
      "Capture compliance photos only and archive them",
      "Collect sales data without compliance tracking",
      "Build a correlation analysis dashboard linking compliance KPIs to revenue data",
      "Review compliance verbally during quarterly meetings"
    ],
    "answer": 2,
    "explanation": "Overall explanation Correlation analysis dashboards reveal how compliance influences revenue, unlike photo archiving, sales-only tracking, or verbal reviews which miss analytical insights."
  },
  {
    "question": "A business wants to automatically flag stores where inventory turnover is below target. What’s the correct configuration?",
    "options": [
      "Review turnover manually each month",
      "Use analytics dashboards with conditional formatting and alerts",
      "Track turnover annually only",
      "Wait for store managers to report low turnover"
    ],
    "answer": 1,
    "explanation": "Overall explanation Conditional formatting with alerts automates detection of low turnover, unlike manual monthly reviews, annual tracking, or reactive store reports."
  },
  {
    "question": "A sales VP needs insights into cross-sell opportunities by analyzing customer purchase patterns across product lines. How should this be implemented?",
    "options": [
      "Have sales reps suggest cross-sell options during meetings",
      "Provide static product line reports for reference",
      "Use Einstein Analytics (Tableau CRM) to identify purchase pattern correlations",
      "Review cross-selling results only at year-end"
    ],
    "answer": 2,
    "explanation": "Overall explanation Einstein Analytics uncovers correlation patterns that drive cross-sell strategies, unlike static reports, rep suggestions, or annual reviews which lack predictive capability."
  },
  {
    "question": "A chain retailer wants to track KPI performance at different hierarchy levels (national, regional, store). What is the best analytics solution?",
    "options": [
      "Build separate static reports for each level",
      "Use spreadsheets to manually aggregate KPI performance",
      "Ignore regional and store-level KPIs",
      "Use hierarchical dashboards with drill-down capabilities"
    ],
    "answer": 3,
    "explanation": "Overall explanation Hierarchical dashboards enable drill-down analysis across organizational levels, unlike static reports, manual aggregation, or ignoring lower-level KPIs which limit visibility."
  },
  {
    "question": "A marketing team wants to monitor social media sentiment and link it to store performance metrics in Salesforce. Which is the recommended approach?",
    "options": [
      "Manually copy sentiment data into Salesforce weekly",
      "Only track store sales without sentiment data",
      "Use native reports and dashboards for sales KPIs",
      "Integrate social media sentiment data with Salesforce and create combined dashboards"
    ],
    "answer": 3,
    "explanation": "Overall explanation Integrating sentiment data with Salesforce provides contextual insights, unlike manual entry, ignoring sentiment, or using only sales dashboards without external data."
  },
  {
    "question": "A retail operations manager wants to evaluate visit productivity by comparing time spent per visit versus sales achieved. What’s the best approach?",
    "options": [
      "Track time spent manually using paper logs",
      "Use existing dashboards without time tracking fields",
      "Build a custom dashboard incorporating visit duration and sales output metrics",
      "Ignore visit duration to simplify analysis"
    ],
    "answer": 2,
    "explanation": "Overall explanation Custom dashboards combining time and sales KPIs deliver actionable insights, unlike paper logs, dashboards without time metrics, or ignoring duration altogether."
  },
  {
    "question": "A CPG executive wants to track on-shelf availability (OSA) trends over time to measure supply chain performance. What’s the recommended solution?",
    "options": [
      "Measure OSA manually once a year",
      "Rely on weekly team meetings to discuss OSA verbally",
      "Build dynamic dashboards with OSA KPIs linked to historical trend data",
      "Focus only on warehouse stock levels"
    ],
    "answer": 2,
    "explanation": "Overall explanation Dynamic dashboards with historical trend analysis provide actionable OSA insights, unlike annual manual checks, verbal updates, or focusing solely on warehouse data which doesn’t reflect shelf reality."
  },
  {
    "question": "A field manager wants to assign a store-specific maintenance task (e.g., refrigerator check) to reps and ensure it appears automatically during each visit. Which configurations are required?",
    "options": [
      "Create a Custom Task Template and assign it to the store",
      "Use automation to attach the task to recurring visits",
      "Have reps manually add the maintenance task each time",
      "Use a Chatter post to remind reps about the task"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Using a Custom Task Template ensures consistency, and automation attaches it automatically to visits. Manual entry or Chatter reminders rely on human memory and risk non-compliance."
  },
  {
    "question": "A CPG company wants to ensure safety compliance by requiring reps to fill out an equipment inspection checklist at high-risk stores. Which steps are recommended?",
    "options": [
      "Create a custom checklist task template",
      "Apply conditional logic to display the task only at high-risk stores",
      "Ask reps to remember which stores require the checklist",
      "Add the checklist only at the regional manager’s discretion"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Checklist templates with conditional logic guarantee the task appears only where required, unlike rep memory or subjective manager discretion, which is unreliable."
  },
  {
    "question": "A sales director wants all reps to capture shelf-share photos as part of each merchandising visit and tag them by product category. How should this be implemented?",
    "options": [
      "Create a photo capture custom task",
      "Require a picklist for product category tagging",
      "Let reps decide if photos are necessary",
      "Use verbal feedback instead of photo evidence"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Custom tasks enforce mandatory photo capture, and picklist tagging ensures structured data. Optional photos or verbal feedback lack standardization and auditability."
  },
  {
    "question": "A team lead wants to assign store remodel tasks to only those locations undergoing layout changes and ensure tracking of completion dates. What is the best configuration?",
    "options": [
      "Use a Custom Task Template for remodel tasks",
      "Apply a filter to assign remodel tasks only to flagged stores",
      "Ask reps to determine if a store needs remodel tasks on their own",
      "Track remodel tasks manually using spreadsheet"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Task templates with filters automate targeted assignments, avoiding rep-level subjectivity and eliminating error-prone manual spreadsheets."
  },
  {
    "question": "A company wants to ensure promotional display audits are completed during every promotion period but not outside of it. Which configurations should be implemented?",
    "options": [
      "Schedule tasks only during promotion start and end dates",
      "Use task automation tied to promotion objects",
      "Require reps to always check for displays, even off-promotion",
      "Assign promotion audits manually to each visit"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Date-based task scheduling and automation tied to promotion records ensure audits happen only when relevant. Manual assignments or perpetual checks waste resources."
  },
  {
    "question": "A retailer wants to ensure tasks like “COVID-19 sanitation check” appear on visits only for stores flagged for sanitation priority. How can this be achieved?",
    "options": [
      "Build a custom sanitation task template",
      "Use conditional assignment based on store flag attributes",
      "Have reps add sanitation checks if they think it's necessary",
      "Depend on store managers to call if sanitation is needed"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Custom task templates with conditional logic ensure required sanitation checks only at flagged locations, avoiding ad hoc rep judgment or delayed manager requests."
  },
  {
    "question": "A field team needs to capture competitive pricing during visits and automatically sync data to Salesforce analytics dashboards. What is the recommended setup?",
    "options": [
      "Create a competitive pricing custom task template with required fields",
      "Integrate collected data with Einstein Analytics (Tableau CRM)",
      "Record pricing data on paper and upload later",
      "Use only periodic email surveys for competitive insights"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation A custom template ensures standardized pricing capture, and Einstein Analytics integration automates analysis. Manual paper or email surveys lack speed and structure."
  },
  {
    "question": "A CPG operations team wants tasks related to sustainability audits automatically generated when a store meets eco-certification criteria. Which solution is best?",
    "options": [
      "Use eco-certification attribute filters for task assignment",
      "Build a sustainability audit custom task template",
      "Leave reps to decide if a sustainability audit is required",
      "Handle sustainability audits only on an annual basis"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Attribute-driven filters and custom templates automate sustainability audits precisely when needed, unlike rep discretion or infrequent manual audits."
  },
  {
    "question": "A company wants to differentiate between standard tasks and high-priority urgent tasks during visits to avoid delays in execution. How can this be achieved?",
    "options": [
      "Assign task priority using custom fields",
      "Use color-coded task indicators in the mobile app",
      "Leave prioritization to rep discretion",
      "Track urgent tasks only in Excel offline"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Priority fields and color indicators provide visual clarity and system-driven urgency, unlike manual rep discretion or offline Excel, which create execution risks."
  },
  {
    "question": "A merchandising team wants to link planogram compliance tasks with photo capture and automatic scoring. What is the best configuration?",
    "options": [
      "Create a planogram compliance custom task with mandatory photo capture",
      "Use automation to calculate compliance scores upon photo submission",
      "Depend on reps to visually check compliance without photos",
      "Rely on verbal confirmation from store staff"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Custom tasks with mandatory photos and automated scoring ensure accurate compliance tracking, unlike subjective visual checks or verbal confirmations that lack evidence."
  },
  {
    "question": "A DSD manager wants to ensure delivery confirmation and instant invoicing are done at the store without returning to the office. Which solutions meet the need?",
    "options": [
      "Enable on-site invoice generation",
      "Use offline-capable DSD mobile app",
      "Collect signatures later via email",
      "Use digital signature capture at the point of delivery"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Overall explanation On-site invoice generation and digital signatures confirm deliveries in real time. Collecting signatures later or lacking mobile capability delays financial and customer processes."
  },
  {
    "question": "A CPG company wants to minimize delivery errors and improve routing efficiency for urban stores with high traffic congestion. Which solutions are best?",
    "options": [
      "Implement barcode scanning for product validation",
      "Use AI-based route optimization",
      "Rely solely on driver experience",
      "Pre-print delivery slips for each route"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "Overall explanation AI-based route optimization reduces travel time, and pre-printing slips for each route ensures accuracy. Driver experience alone and skipping validation increase errors."
  },
  {
    "question": "A distributor wants to process unsellable goods returns and issue credit instantly during DSD visits. Which configurations are correct?",
    "options": [
      "Capture return reason codes on mobile",
      "Approve credits manually in back office only",
      "Automatically generate credit memos",
      "Handle returns only quarterly"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Capturing return reason codes and generating automatic credit memos streamline financial processing. Manual back-office approvals and quarterly returns create delays and disputes."
  },
  {
    "question": "A sales leader wants to reduce product stockouts by linking inventory data to deliveries and alerting reps when quantities fall below thresholds. What solutions are required?",
    "options": [
      "Use mobile-enabled inventory visibility",
      "Rely on monthly inventory reports",
      "Create real-time low-stock alerts",
      "Leave stock analysis to store staff"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Real-time inventory visibility and low-stock alerts prevent stockouts. Monthly reporting and relying on store staff create response lags and inaccuracies."
  },
  {
    "question": "A field team must track payment collections securely during DSD visits. Which features should be enabled?",
    "options": [
      "Mobile POS integration for multiple payment types",
      "Use manual cash logs updated weekly",
      "Automatically sync payment data with Salesforce",
      "Skip recording small cash payments"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Mobile POS integration and automatic syncing ensure secure, traceable payment handling. Manual logs and skipped entries create audit risks and reconciliation issues."
  },
  {
    "question": "A CPG manufacturer wants to promote new seasonal SKUs and ensure delivery teams prioritize them during DSD visits. Which solutions meet this goal?",
    "options": [
      "Add seasonal SKUs to product catalog",
      "Provide end-of-season manual review",
      "Enable prioritization flags in mobile workflows",
      "Wait for store managers to request seasonal SKUs"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Seasonal SKUs in catalog and priority flags help reps push targeted products during DSD. Relying on manager requests or manual review misses proactive selling opportunities."
  },
  {
    "question": "A DSD operations manager wants better oversight of vehicle utilization and timely deliveries for remote rural locations. Which steps are correct?",
    "options": [
      "Enable route tracking with GPS telemetry",
      "Perform vehicle loading manually",
      "Use delivery time window alerts",
      "Ignore route data for remote stores"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation GPS telemetry and time window alerts improve rural delivery oversight. Manual loading and ignoring data compromise delivery efficiency and accuracy."
  },
  {
    "question": "A business wants to validate promotions during DSD deliveries and capture compliance photos linked to invoices. What solution mix is required?",
    "options": [
      "Create promotion compliance custom tasks",
      "Use integrated photo capture linked to invoice",
      "Ask reps to verbally confirm promotions",
      "Run compliance reports quarterly"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Promotion tasks and photo evidence ensure compliance. Verbal confirmations or quarterly reports lack auditability and timeliness."
  },
  {
    "question": "A regional manager wants to support partial deliveries due to store space limitations and schedule follow-up deliveries automatically. Which features are essential?",
    "options": [
      "Enable partial delivery workflow in DSD",
      "Request store to call for follow-up",
      "Automate follow-up delivery tasks",
      "Use paper logs for tracking partial deliveries"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Partial delivery workflows and automated follow-ups ensure service continuity. Relying on calls or paper logs creates errors and customer dissatisfaction."
  },
  {
    "question": "A company wants to reconcile DSD invoices and delivery notes automatically at the store to prevent disputes. Which configurations achieve this?",
    "options": [
      "Enable on-site invoice matching",
      "Capture digital customer signature",
      "Perform reconciliation at month end",
      "Depend solely on rep memory"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation On-site matching and digital signatures create immediate, verifiable reconciliation. Month-end processes or memory-based methods increase errors and disputes."
  },
  {
    "question": "A field rep needs to check stock levels during every store visit and capture out-of-stock (OOS) reasons directly in Salesforce. What is the best setup?",
    "options": [
      "Use Inventory Check tasks with fields for stock quantity and OOS reason codes",
      "Ask reps to verbally inform managers of OOS items",
      "Capture stock levels in free-text notes on visit records",
      "Use spreadsheets uploaded weekly"
    ],
    "answer": 0,
    "explanation": "Overall explanation Inventory Check tasks allow structured stock cpture and OOS reason tracking directly in Salesforce. Verbal communication, free-text notes, or spreadsheets lack automation, audit trails, and reporting capability."
  },
  {
    "question": "A company wants to automate restock requests when stock levels fall below a defined threshold during visits. What is the best solution?",
    "options": [
      "Configure Inventory Check with automation to create restock requests when thresholds are breached",
      "Ask reps to email stock shortages manually",
      "Use only monthly audits to identify shortages",
      "Log shortages in a separate non-integrated app"
    ],
    "answer": 0,
    "explanation": "Overall explanation Inventory Check automation triggers restock requests instantly, improving replenishment speed. Manual emails, monthly audits, or separate apps delay response and create data silos."
  },
  {
    "question": "A manager wants to measure stock accuracy by comparing store inventory levels to planogram requirements during visits. How can this be implemented?",
    "options": [
      "Ask reps to visually estimate stock compliance",
      "Use manual store-by-store photo comparisons",
      "Use Inventory Check tasks linked to Planogram data for automated compliance calculation",
      "Ignore planogram differences and track only stock counts"
    ],
    "answer": 2,
    "explanation": "Overall explanation Linking Inventory Check tasks to Planogram data allows accurate compliance calculation, unlike visual estimates, manual photo reviews, or ignoring planogram alignment."
  },
  {
    "question": "A company wants to simplify inventory capture for seasonal products that rotate frequently but still ensure accurate reporting. What is the best configuration?",
    "options": [
      "Your answer is incorrect",
      "Configure Inventory Check templates with seasonal product lists and automate reporting",
      "Use static product lists that reps edit manually during visits",
      "Require reps to note seasonal products in comments fields",
      "Track seasonal products using separate spreadsheets"
    ],
    "answer": 0,
    "explanation": "Overall explanation Templates with seasonal product lists ensure structured and efficient data capture. Manual edits, comment fields, or spreadsheets increase errors and reduce reporting consistency."
  },
  {
    "question": "A brand manager wants to measure On-Shelf Availability (OSA) and compare it across territories in near real-time. What is the best way to achieve this?",
    "options": [
      "Use photo-based store visits only",
      "Perform monthly audits manually",
      "Use Inventory Check tasks with OSA fields and territory-based dashboards",
      "Track OSA through email-based surveys"
    ],
    "answer": 2,
    "explanation": "Overall explanation Inventory Check tasks with OSA fields provide structured, near real-time data segmented by territory. Manual audits, photos without structured data, or email surveys lack speed and consistency."
  },
  {
    "question": "A merchandising team wants to reduce repetitive manual data entry during inventory capture by preloading store-specific product assortments for reps. What is the best solution?",
    "options": [
      "Your answer is incorrect",
      "Create store-specific inventory templates with preloaded assortments for each location",
      "Ask reps to manually search for each product during every visit",
      "Use only free-text inventory fields",
      "Capture stock using external apps with no Salesforce integration"
    ],
    "answer": 0,
    "explanation": "Overall explanation Preloading assortments minimizes manual entry and ensures accuracy, unlike manual searches, free-text entries, or non-integrated external apps."
  },
  {
    "question": "A compliance team wants to track expired products found in stores and link those findings to recall processes. How should this be implemented?",
    "options": [
      "Ask reps to note expired products on paper forms",
      "Capture expiration dates in visit notes only",
      "Ignore expiration data and focus on sales volume",
      "Use Inventory Check tasks with fields for expiration tracking and link results to recall workflows"
    ],
    "answer": 3,
    "explanation": "Overall explanation Structured expiration capture through Inventory Check tasks ensures automated recall linkage. Paper notes, visit notes, or ignoring expiration data result in compliance risk and limited visibility."
  },
  {
    "question": "A company needs to verify promotional inventory levels separately from regular stock to ensure display compliance. What is the best setup?",
    "options": [
      "Use generic inventory tasks and filter promotional items manually",
      "Capture promotional stock counts in a separate spreadsheet",
      "Rely on visual inspection only",
      "Create a dedicated Inventory Check template for promotional stock and link it to promotion execution tasks"
    ],
    "answer": 3,
    "explanation": "Overall explanation Dedicated promotional inventory templates provide structured, linked compliance data, unlike generic tasks, spreadsheets, or visual-only inspections."
  },
  {
    "question": "A sales manager wants to segment inventory check performance by region and highlight stores with frequent stockouts. How can this be accomplished?",
    "options": [
      "Use manual Excel pivot tables exported monthly",
      "Use Territory Management with Inventory Check reporting dashboards",
      "Track stockouts manually via rep notes",
      "Maintain separate offline reports for each region"
    ],
    "answer": 1,
    "explanation": "Overall explanation Territory Management combined with Inventory Check reporting enables real-time segmentation and insights. Manual pivot tables, notes, or offline reports lack automation and scalability."
  },
  {
    "question": "A retailer wants to pilot an “AI-Powered Stock Forecasting Check” in 50 high-volume stores while maintaining standard inventory checks elsewhere. What is the best configuration?",
    "options": [
      "Create a pilot-specific Inventory Check template for those 50 stores and track results separately",
      "Replace all store inventory templates with the AI-powered one immediately",
      "Track pilot data manually using spreadsheets",
      "Add optional pilot questions to all existing templates"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific template allows controlled testing and separate performance measurement. Replacing all templates, using spreadsheets, or optional questions compromise standardization and pilot control."
  },
  {
    "question": "A retailer wants reps to verify shelf layouts during visits and ensure compliance with the assigned planogram. What is the best solution?",
    "options": [
      "Use Planogram Check tasks linked to the assigned Planogram Template for each store",
      "Use photos only without structured compliance tasks",
      "Track compliance manually via Excel sheets",
      "Send planogram PDFs via email for reference"
    ],
    "answer": 0,
    "explanation": "Overall explanation Planogram Check tasks ensure compliance validation directly linked to Planogram Templates, providing structured data and reporting. Photos alone, Excel sheets, or emailed PDFs lack automation, traceability, and analytics."
  },
  {
    "question": "A CPG company wants to track compliance differences for premium displays separately from standard shelf placements. How should this be configured?",
    "options": [
      "Create separate Planogram Check templates for premium displays and link them to store visits",
      "Ask reps to mark premium display checks manually during visits",
      "Use a single generic compliance form for all displays",
      "Ignore premium displays and track only standard shelf layouts",
    ],
    "answer": 0,
    "explanation": "Overall explanation Separate templates ensure premium and standard displays are tracked independently, enabling accurate reporting. Manual marking or generic forms cause inconsistent data, and ignoring premium displays leaves compliance gaps."
  },
  {
    "question": "A brand manager wants to analyze compliance by comparing actual shelf placement to the desired layout across multiple store formats. How should this be achieved?",
    "options": [
      "Ask reps to visually estimate compliance during visits",
      "Capture shelf photos and compare them manually post-visit",
      "Use Planogram Check tasks linked to format-specific Planogram Templates with compliance scoring",
      "Focus only on product presence, not placement accuracy",
    ],
    "answer": 2,
    "explanation": "Overall explanation Planogram Check tasks linked to format-specific templates enable structured scoring and reporting. Visual estimates, manual photo reviews, or ignoring placement accuracy limit data quality and insight."
  },
  {
    "question": "A retailer wants to add additional seasonal products to existing planograms for the holiday period without creating new templates. How can this be done efficiently?",
    "options": [
      "Update existing Planogram Check templates dynamically to include seasonal products",
      "Require reps to manually note seasonal items during checks",
      "Create completely new templates for every season",
      "Use free-text fields for seasonal compliance notes"
    ],
    "answer": 0,
    "explanation": "Overall explanation Updating existing templates with seasonal items streamlines compliance while avoiding template sprawl. Manual notes, free-text fields, or creating new templates each season increases complexity and risk of errors."
  },
  {
    "question": "A company wants to capture planogram execution metrics (e.g., facings, shelf share) and link them to product sales to analyze lift. What is the best setup?",
    "options": [
      "Track only stock presence, ignoring facings",
      "Use visit notes for shelf share instead of structured fields",
      "Use Planogram Check tasks with metrics fields and reporting dashboards integrated with sales data",
      "Rely on post-visit phone calls to collect shelf share data"
    ],
    "answer": 2,
    "explanation": "Overall explanation Planogram Check tasks with metric fields enable detailed analysis of facings and shelf share correlated to sales. Notes, calls, or minimal stock presence data lack granularity and automation."
  },
  {
    "question": "A merchandising team wants to reduce time spent on repetitive planogram checks by preloading store-specific planogram data before visits. What is the best solution?",
    "options": [
      "Configure Planogram Check templates preloaded with store-specific data for automated compliance capture",
      "Correct answer",
      "Require reps to search for planogram layouts manually each time",
      "Use generic templates for all stores",
      "Track planogram details offline and upload manually"
    ],
    "answer": 0,
    "explanation": "Overall explanation Preloaded templates ensure faster, accurate compliance checks, unlike manual searches, generic templates, or offline tracking that increase errors and inefficiency."
  },
  {
    "question": "A retailer wants to validate planogram compliance for a special launch zone with unique fixtures not used in other stores. How can this be configured?",
    "options": [
      "Ignore the launch zone and check only standard fixtures",
      "Use generic compliance tasks unrelated to the launch zone",
      "Require reps to add notes about special fixtures manually",
      "Create a dedicated Planogram Check template for the launch zone with unique compliance fields"
    ],
    "answer": 3,
    "explanation": "Overall explanation A dedicated template ensures unique fixtures are tracked accurately. Ignoring or using generic templates fails to capture specific launch zone data, while manual notes lack structure and reporting."
  },
  {
    "question": "A national chain wants to track compliance of promotional secondary displays placed in high-traffic areas, separate from regular shelves. What is the best approach?",
    "options": [
      "Use one standard planogram check template for all compliance activities",
      "Track secondary displays manually using notes",
      "Perform only visual checks without recording data",
      "Create a specific Planogram Check template for promotional secondary displays and link it to relevant store visits"
    ],
    "answer": 3,
    "explanation": "Overall explanation Separate templates for promotional displays ensure structured tracking and reporting distinct from regular shelves. Manual notes or visual checks lack accuracy and auditability."
  },
  {
    "question": "A company wants to identify regional differences in planogram compliance scores and highlight underperforming areas. How can this be achieved?",
    "options": [
      "Export planogram data to Excel and manually segment by region",
      "Use Territory Management integrated with Planogram Check compliance dashboards",
      "Track compliance via free-text regional notes",
      "Use manual reports for each region separately"
    ],
    "answer": 1,
    "explanation": "Overall explanation Territory Management with compliance dashboards provides automated regional segmentation, unlike Excel exports, free-text notes, or manually created reports that are time-consuming and error-prone."
  },
  {
    "question": "A retailer wants to pilot a “Smart Shelf” compliance program in 30 flagship stores while continuing standard planogram checks elsewhere. How should this be set up?",
    "options": [
      "Create a pilot-specific Planogram Check template for those stores and track results separately",
      "Replace all planogram templates with the Smart Shelf version immediately",
      "Track pilot stores manually using spreadsheets",
      "Add an optional Smart Shelf field to all planogram checks"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific template ensures controlled rollout and separate reporting for flagship stores. Replacing all templates, manual spreadsheets, or optional fields lacks focus and structure for comparative analysis."
  },
  {
    "question": "A consumer goods company wants reps to verify that promotional pricing and displays are active during visits. What is the best solution?",
    "options": [
      "Your answer is correct",
      "Use Promotion Check tasks linked to the relevant promotions and capture compliance data",
      "Ask reps to take photos and upload them to Chatter",
      "Track compliance via verbal confirmation from store managers",
      "Use an offline checklist with no Salesforce integration"
    ],
    "answer": 0,
    "explanation": "Overall explanation Promotion Check tasks provide structured compliance tracking directly tied to promotions, enabling real-time reporting. Photos, verbal confirmation, or offline lists lack data structure, automation, and reporting capability."
  },
  {
    "question": "A retailer needs to validate promotional product facings separately from regular shelf products during every visit. What’s the best configuration?",
    "options": [
      "Create dedicated Promotion Check templates for promotional products only",
      "Ask reps to note promotional facings in free-text fields",
      "Use one generic compliance form for all products",
      "Track facings through a monthly external audit"
    ],
    "answer": 0,
    "explanation": "Overall explanation Dedicated templates isolate promotional execution from regular shelf checks and improve reporting. Free-text fields, generic forms, or external audits lack precision and timeliness."
  },
  {
    "question": "A brand manager wants to analyze compliance by comparing planned promotional placements with actual execution for different store formats. How should this be achieved?",
    "options": [
      "Ask reps to provide a yes/no answer for each promotion",
      "Take pictures and compare them manually after visits",
      "Use Promotion Check tasks linked to store-format-specific promotion templates with compliance scoring",
      "Rely only on sales lift data post-promotion"
    ],
    "answer": 2,
    "explanation": "Overall explanation Promotion Check tasks tied to templates and compliance scoring enable structured, format-specific analytics. Manual yes/no answers, photos, or sales lift alone fail to measure execution accuracy."
  },
  {
    "question": "A merchandising team needs to handle short-term flash promotions in specific stores while continuing to track ongoing promotions. What is the best approach?",
    "options": [
      "Your answer is incorrect",
      "Use Promotion Check templates with date-based activation for flash promotions",
      "Rely on reps to manually add flash promotion checks during visits",
      "Create separate Salesforce records for every store every time a flash promotion occurs",
      "Track flash promotions manually via Excel"
    ],
    "answer": 0,
    "explanation": "Overall explanation Date-based templates automate flash promotion tracking without creating excessive manual work. Manual additions, repetitive record creation, or offline tracking increase error and administrative burden."
  },
  {
    "question": "A company wants to track promotional compliance metrics (e.g., promotional stock levels, display quality) and link them to sales to assess promotion ROI. What is the best solution?",
    "options": [
      "Only capture basic yes/no compliance for promotions",
      "Use offline notes for promotional stock levels",
      "Use Promotion Check tasks with detailed compliance fields and dashboards integrated with sales data",
      "Track only display quality and ignore stock levels"
    ],
    "answer": 2,
    "explanation": "Overall explanation Promotion Check tasks with detailed fields allow granular tracking of compliance metrics and link them with sales data for ROI analysis. Yes/no tracking, offline notes, or partial metrics reduce insight accuracy."
  },
  {
    "question": "A retailer wants to reduce repetitive data entry for common promotional checks by automatically preloading relevant promotion data for each store visit. What is the best setup?",
    "options": [
      "Use generic promotion templates for all stores",
      "Configure store-specific Promotion Check templates that preload active promotions for each visit",
      "Ask reps to manually enter promotion details at every visit",
      "Track promotion data offline and import later"
    ],
    "answer": 1,
    "explanation": "Overall explanation Preloading store-specific promotion data minimizes manual effort and ensures consistency, unlike generic templates, manual entry, or offline tracking."
  },
  {
    "question": "A beverage company wants to validate execution of a seasonal endcap promotion requiring unique product grouping and signage in select stores. How can this be configured?",
    "options": [
      "Use one general Promotion Check template and manually flag seasonal endcaps",
      "Track endcaps using free-text fields only",
      "Require reps to email pictures of endcaps after visits",
      "Create a dedicated Promotion Check template for seasonal endcaps with unique compliance fields"
    ],
    "answer": 3,
    "explanation": "Overall explanation A dedicated template ensures structured, auditable tracking of seasonal endcap execution. Manual flags, free-text notes, or email-based tracking lack integration and data accuracy."
  },
  {
    "question": "A national chain wants to verify promotional secondary displays in high-traffic areas separate from standard shelf promotions. What is the best approach?",
    "options": [
      "Use one standard template for all promotions",
      "Use photos only without compliance data",
      "Perform only periodic audits and ignore daily checks",
      "Create a specific Promotion Check template for secondary displays linked to relevant visits"
    ],
    "answer": 3,
    "explanation": "Overall explanation Dedicated templates for secondary displays ensure compliance is tracked and reportable separately. Photos-only, generic templates, or occasional audits do not provide structured, actionable insights."
  },
  {
    "question": "A sales manager wants to measure promotion compliance by territory and highlight underperforming areas automatically. How should this be achieved?",
    "options": [
      "Export promotion compliance data to Excel for manual territory analysis",
      "Use Territory Management integrated with Promotion Check compliance dashboards",
      "Track compliance in free-text notes by region",
      "Create separate manual reports for each territory"
    ],
    "answer": 1,
    "explanation": "Overall explanation Territory Management with dashboards automates compliance performance segmentation, unlike manual Excel analysis, free-text notes, or repetitive manual reports that lack scalability."
  },
  {
    "question": "A retailer wants to pilot a “Smart Promotion Compliance Program” in 40 flagship stores while maintaining standard promotion checks elsewhere. How should this be configured?",
    "options": [
      "Create a pilot-specific Promotion Check template for those 40 stores and track results separately",
      "Replace all templates with the Smart Promotion template immediately",
      "Track pilot data manually via spreadsheets",
      "Add an optional Smart Promotion field to all visits"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific template ensures controlled testing and comparison of pilot versus standard promotion performance. Replacing all templates, spreadsheets, or optional fields compromises structure and accuracy."
  },
  {
    "question": "A company wants to collect structured feedback from store managers after every merchandising visit. Responses should be linked to the visit record for analysis. What is the best approach?",
    "options": [
      "Use Salesforce Surveys integrated with Visit records for structured response capture",
      "Ask reps to capture feedback verbally and enter it in notes",
      "Use spreadsheets to record feedback and upload monthly",
      "Use Chatter posts to log feedback responses"
    ],
    "answer": 0,
    "explanation": "Overall explanation Salesforce Surveys linked to Visit records ensure structured feedback capture and direct analytics integration. Notes, spreadsheets, or Chatter posts lack automation, structure, and relational reporting."
  },
  {
    "question": "A brand manager wants to deploy a temporary survey to gauge the effectiveness of an in-store product launch. It should only be available during the launch period. What is the best solution?",
    "options": [
      "Configure a time-bound Salesforce Survey linked to visits for the product launch",
      "Require reps to manually add the survey questions each visit",
      "Capture launch data through external forms emailed to HQ",
      "Use a free-text field for feedback"
    ],
    "answer": 0,
    "explanation": "Overall explanation Time-bound Salesforce Surveys automate deployment and control availability, ensuring consistent data capture only during the promotion period. Manual addition, external forms, or free-text fields are inconsistent and error-prone."
  },
  {
    "question": "A retailer wants to measure customer satisfaction (CSAT) at store level and compare results across store formats. Which configuration is best?",
    "options": [
      "Ask reps to ask customers informally and report satisfaction verbally",
      "Track satisfaction only via sales data trends",
      "Create a CSAT Survey template linked to store format attributes and aggregate results in dashboards",
      "Use optional comments in visit notes for customer sentiment"
    ],
    "answer": 2,
    "explanation": "Overall explanation Linking Surveys with store format attributes enables structured CSAT capture and format-based analytics. Verbal feedback, sales-only trends, or optional notes fail to provide structured, comparable data."
  },
  {
    "question": "A field operations manager wants to create unique survey questions for a specific region to understand regional performance drivers. How should this be handled?",
    "options": [
      "Create a region-specific Survey template linked to visits scheduled in that region",
      "Use the same global survey template and manually filter results later",
      "Track region-specific questions manually via notes",
      "Conduct ad hoc phone interviews post-visit"
    ],
    "answer": 0,
    "explanation": "Overall explanation Region-specific survey templates automate and localize data capture, unlike manual notes or post-visit interviews that increase effort and risk of error."
  },
  {
    "question": "A company wants to track promotional awareness among store staff by adding survey questions tied to ongoing campaigns. What is the best configuration?",
    "options": [
      "Ask promotional questions verbally without recording responses",
      "Send separate emails to gather promotional awareness data",
      "Use Promotion-linked Survey templates to capture awareness responses during visits",
      "Use optional free-text fields during normal compliance checks"
    ],
    "answer": 2,
    "explanation": "Overall explanation Promotion-linked Surveys allow structured, campaign-specific feedback capture and analytics. Verbal questions, email surveys, or optional free-text entries lack traceability and structured reporting."
  },
  {
    "question": "A CPG company wants to minimize rep effort by automatically including survey questions relevant to each store’s category assortment. What is the best setup?",
    "options": [
      "Add survey questions manually for each visit based on store category",
      "Configure dynamic survey templates that preload relevant category questions for each visit",
      "Use one static survey for all stores, regardless of assortment",
      "Have reps email feedback separately for specialized stores"
    ],
    "answer": 1,
    "explanation": "Overall explanation Dynamic surveys improve efficiency by presenting only relevant questions automatically, unlike manual additions, static surveys, or separate emails that add workload and risk missing data."
  },
  {
    "question": "A national retailer wants to collect photo evidence of display compliance as part of survey responses. How should this be configured?",
    "options": [
      "Ignore photo evidence and use only text-based surveys",
      "Capture photos outside Salesforce and email them separately",
      "Add optional image URLs in survey comments",
      "Use Salesforce Surveys with image upload question types for evidence collection"
    ],
    "answer": 3,
    "explanation": "Overall explanation Salesforce Surveys with image upload ensure evidence is linked directly to responses. Ignoring photos, emailing separately, or using text URLs prevents automation and structured compliance validation."
  },
  {
    "question": "A regional manager wants to capture competitor activity during visits and include structured competitor questions in surveys. How can this be implemented?",
    "options": [
      "Use general notes to capture competitor data",
      "Capture competitor activity in free-text fields after visits",
      "Perform separate competitor checks without Salesforce integration",
      "Add competitor-focused questions to the Survey template for structured data capture"
    ],
    "answer": 3,
    "explanation": "Overall explanation Adding competitor-focused questions to surveys allows structured, analyzable competitor tracking directly tied to visits, unlike unstructured notes or disconnected processes."
  },
  {
    "question": "A head of field operations wants to see survey response performance segmented by territory and rep. How should Salesforce be configured?",
    "options": [
      "Export survey responses to Excel and filter manually",
      "Use Territory Management integrated with Salesforce Survey analytics dashboards",
      "Capture rep names in free-text fields",
      "Build manual reports outside Salesforce"
    ],
    "answer": 1,
    "explanation": "Overall explanation Territory Management with Salesforce analytics provides automated segmentation, unlike manual Excel filtering, free-text fields, or external reporting that lacks real-time capability."
  },
  {
    "question": "A retailer wants to pilot a “Digital Experience” survey program in 25 flagship stores, comparing pilot vs. non-pilot results. How should this be configured?",
    "options": [
      "Create a pilot-specific Survey template assigned only to the flagship stores",
      "Replace all surveys with the new digital experience survey immediately",
      "Capture pilot data manually using separate spreadsheets",
      "Add an optional pilot question to existing surveys"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific template allows controlled rollout and easy comparison of pilot vs. standard stores. Replacing all surveys, spreadsheets, or optional questions compromises pilot structure and analysis."
  },
  {
    "question": "A Consumer Goods Cloud admin needs to automate assigning new retail stores to specific territories based on region field values. What is the best approach?",
    "options": [
      "Use Salesforce Flow with Decision elements to route new stores to the correct territory",
      "Use manual assignment of territories by operations staff",
      "Use custom Apex triggers without business justification",
      "Rely on weekly Excel uploads for territory mapping"
    ],
    "answer": 0,
    "explanation": "Overall explanation Flows allow declarative, scalable automation aligned with Salesforce best practices. Manual assignments and Excel uploads are error-prone, while custom Apex adds unnecessary complexity without justification."
  },
  {
    "question": "A manager wants to allow external merchandising partners to access only relevant store visit data. What is the best solution?",
    "options": [
      "Use Salesforce Experience Cloud with role-based access and sharing rules",
      "Provide full Salesforce internal licenses to all partners",
      "Export reports weekly and email them to partners",
      "Use unsecured external spreadsheets"
    ],
    "answer": 0,
    "explanation": "Overall explanation Experience Cloud with role-based sharing ensures secure, controlled access. Full licenses increase cost, while emailed reports or spreadsheets lack security and real-time access."
  },
  {
    "question": "The operations team needs to integrate Consumer Goods Cloud with an ERP to sync product and pricing data daily. Which option is best?",
    "options": [
      "Use manual CSV imports from ERP to Salesforce",
      "Build a one-off Apex integration without error handling",
      "Use Salesforce MuleSoft or standard API integration to automate daily sync with error handling",
      "Use email notifications with product pricing attached"
    ],
    "answer": 2,
    "explanation": "Overall explanation MuleSoft or API integration provides reliable, automated, and scalable data sync, unlike manual imports, one-off Apex solutions without proper monitoring, or email notifications which are unstructured."
  },
  {
    "question": "A business user requests a quick, no-code way to update thousands of store contact records for a seasonal campaign. What should the admin recommend?",
    "options": [
      "Use Salesforce Data Loader or Data Import Wizard for mass updates",
      "Manually edit each record through the UI",
      "Request a developer to write an Apex script",
      "Export all records to Excel and re-upload manually without validation"
    ],
    "answer": 0,
    "explanation": "Overall explanation Data Loader and Import Wizard allow secure, validated bulk updates without coding. Manual edits, Apex scripts, or unmanaged Excel re-uploads increase error risk or require unnecessary developer effort."
  },
  {
    "question": "A field service manager wants to notify reps in real time when a new high-priority visit is assigned. What platform capability should be used?",
    "options": [
      "Wait for weekly reports and communicate assignments via email",
      "Post assignments manually to a Chatter group",
      "Use Salesforce Flow to trigger a push notification through the Salesforce mobile app",
      "Use offline paper-based notifications"
    ],
    "answer": 2,
    "explanation": "Overall explanation Salesforce Flow with push notifications provides immediate, automated communication, unlike delayed reports, manual Chatter updates, or paper-based methods."
  },
  {
    "question": "A company wants to ensure only approved promotions can be added to visits. What is the most efficient way to enforce this?",
    "options": [
      "Use custom Apex triggers to validate promotions",
      "Use validation rules and picklist constraints linked to approved promotions",
      "Use manual post-processing audits after promotions are added",
      "Allow reps to select any promotion and clean data later"
    ],
    "answer": 1,
    "explanation": "Overall explanation Validation rules and picklist constraints enforce data integrity at entry, unlike post-processing audits or free-choice selection. Apex should only be used if declarative tools cannot achieve the goal."
  },
  {
    "question": "A sales director needs to track historical changes in key store data such as address and contact information. What platform capability best supports this?",
    "options": [
      "Ignore historical data and only track current state",
      "Use manual notes to document changes",
      "Use weekly exports to Excel as historical reference",
      "Enable Salesforce Field History Tracking on critical store fields"
    ],
    "answer": 3,
    "explanation": "Overall explanation Field History Tracking automatically records historical changes natively, unlike manual notes, ignoring history, or relying on static Excel exports that are prone to data gaps."
  },
  {
    "question": "A compliance team needs to ensure changes to retail store financial details go through an approval process before being finalized. What is the best solution?",
    "options": [
      "Rely on post-change manual audits",
      "Use Chatter posts requesting peer review",
      "Enable record-level validation without workflow",
      "Use Salesforce Approval Processes to manage change requests and approvals"
    ],
    "answer": 3,
    "explanation": "Overall explanation Approval Processes enforce structured review before committing sensitive changes, unlike manual audits, Chatter posts, or simple validation rules that do not handle approvals."
  },
  {
    "question": "A manager wants a dashboard showing visit completion rates segmented by region and territory. How can this be achieved quickly?",
    "options": [
      "Export visit data into Excel and manually create charts",
      "Use Salesforce native Reports and Dashboards with filters for region and territory",
      "Build a custom external BI integration just for visit data",
      "Manually request updates from each territory lead weekly"
    ],
    "answer": 1,
    "explanation": "Overall explanation Salesforce native reports and dashboards deliver quick, real-time analytics without additional cost or complexity, unlike Excel, external BI for simple use cases, or manual updates."
  },
  {
    "question": "The IT team wants to pilot a new AI-driven visit optimization tool in Consumer Goods Cloud without disrupting existing scheduling logic. What is the best configuration?",
    "options": [
      "Create a sandbox environment or dedicated pilot org for AI-driven scheduling and compare results",
      "Replace production scheduling logic immediately",
      "Track pilot results manually using spreadsheets",
      "Add optional fields to existing visit records for AI outputs only",
    ],
    "answer": 0,
    "explanation": "Overall explanation Using a sandbox or pilot org ensures safe, isolated testing and measurable results. Replacing production logic, spreadsheets, or optional fields compromises control, accuracy, or risk mitigation."
  },
  {
    "question":"A field manager wants to ensure that all top-tier stores are visited every week while smaller stores are visited biweekly. What is the best way to configure this?",
    "options": [
      "Use Visit Frequency Rules with account segmentation to drive weekly and biweekly scheduling",
      "Manually create visits for top-tier stores every week",
      "Create a separate Excel file to track visit frequencies",
      "Ask reps to decide frequency themselves"
    ],
    "answer": 0,
    "explanation": "Overall explanation Visit Frequency Rules automate scheduling based on account attributes, ensuring consistency. Manual scheduling, Excel, or rep discretion is error-prone and not scalable."
  },
  {
    "question": "A company wants to create visit plans automatically for newly onboarded stores within a specific territory. What is the best approach?",
    "options": [
      "Use auto-generated Visit Plans tied to the territory model and store attributes",
      "Have managers manually assign visits after store onboarding",
      "Export the new store list and manually upload visit schedules",
      "Use Chatter posts to notify reps about new stores"
    ],
    "answer": 0,
    "explanation": "Overall explanation Automated Visit Plans leverage account data and territory mapping for scalable, error-free planning, unlike manual or external processes."
  },
  {
    "question": "A sales director needs to prioritize visits based on account sales volume and promotional activity for the upcoming quarter. What is the best configuration?",
    "options": [
      "Manually sort stores by sales volume before scheduling",
      "Use standard frequency rules only",
      "Configure weighted Visit Prioritization using metrics like sales volume and promotion flags",
      "Track promotion activity separately in spreadsheets"
    ],
    "answer": 2,
    "explanation": "Overall explanation Weighted Visit Prioritization dynamically ranks stores based on key metrics. Manual sorting, static rules, or spreadsheets lack automation and responsiveness."
  },
  {
    "question": "A field rep team wants to optimize their travel routes to reduce travel time and fuel costs without altering the store visit sequence. What Salesforce capability should be used?",
    "options": [
      "Use Salesforce Maps or route optimization features for travel efficiency",
      "Have reps plan their own routes manually",
      "Use Google Maps separately without Salesforce integration",
      "Ignore route planning to focus only on visit counts"
    ],
    "answer": 0,
    "explanation": "Overall explanation Salesforce Maps optimizes travel while maintaining planned visit sequences, unlike manual planning, disconnected map apps, or no optimization at all."
  },
  {
    "question": "A retailer wants to adjust visit plans dynamically when stores report urgent stock issues. What is the best way to handle this?",
    "options": [
      "Ask reps to visit those stores on their own discretion",
      "Use static weekly schedules with no changes",
      "Enable dynamic Visit Rescheduling rules triggered by stock issue reports",
      "Manage urgent visits through offline phone calls"
    ],
    "answer": 2,
    "explanation": "Overall explanation Dynamic rescheduling rules provide automated, responsive planning, unlike static schedules, discretionary visits, or phone-based coordination."
  },
  {
    "question": "A distributor wants to ensure each sales rep covers all stores in their territory within a given month but avoid scheduling conflicts. What is the best setup?",
    "options": [
      "Have reps manually assign visits in shared calendars",
      "Use Visit Plan Generation with territory ownership and conflict detection",
      "Use static Excel-based schedules updated monthly",
      "Avoid visit planning and let reps decide their schedules"
    ],
    "answer": 1,
    "explanation": "Overall explanation Automated Visit Plan Generation with conflict detection ensures equitable coverage and avoids scheduling errors, unlike manual or Excel-based approaches."
  },
  {
    "question": "A company wants to pilot a “High Touch” visit program focusing only on premium accounts, separate from the standard monthly visit plan. How should this be configured?",
    "options": [
      "Merge high-touch tasks into the regular visit template",
      "Have reps manually add premium visits as needed",
      "Track high-touch visits in a separate spreadsheet",
      "Create a dedicated High Touch Visit Plan and template for premium accounts"
    ],
    "answer": 3,
    "explanation": "Overall explanation Dedicated visit plans for premium accounts ensure clear differentiation, tracking, and analytics, unlike merging tasks, manual additions, or spreadsheets."
  },
  {
    "question": "A sales team wants to schedule quarterly business review visits for specific strategic accounts while continuing regular operational visits. What is the best approach?",
    "options": [
      "Use one visit plan and manually add review tasks to standard visits",
      "Track quarterly reviews in notebooks",
      "Ignore strategic reviews and focus on daily visits only",
      "Create a separate Quarterly Review Visit Plan linked to strategic accounts"
    ],
    "answer": 3,
    "explanation": "Overall explanation Separate plans for quarterly reviews ensure proper tracking and structured reporting, unlike manual additions or ignoring strategic reviews altogether."
  },
  {
    "question": "A manager wants to analyze visit adherence by comparing planned versus completed visits at the territory level. How should Salesforce be configured?",
    "options": [
      "Export planned vs. actual data into Excel for manual analysis",
      "Use Salesforce native reports and dashboards to track planned vs. completed visits by territory",
      "Track adherence via free-text rep notes",
      "Perform quarterly manual compliance audits"
    ],
    "answer": 1,
    "explanation": "Overall explanation Native reports and dashboards provide automated adherence tracking, unlike manual Excel analysis, notes, or audits that are reactive and inefficient."
  },
  {
    "question": "A retailer wants to pilot AI-based visit prioritization in one region before rolling it out globally. What is the best configuration?",
    "options": [
      "Create a pilot-specific AI-based Visit Plan template limited to that region",
      "Replace all visit plans globally with AI prioritization immediately",
      "Track pilot data manually via spreadsheets",
      "Add optional AI-priority tags to existing visits"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific template isolates changes for testing and comparison, unlike global rollouts, spreadsheets, or optional tags which lack control and analytic clarity."
  },
  {
    "question": "A consumer goods distributor wants to sync daily inventory data from their ERP to Salesforce to ensure reps have real-time stock visibility. What is the best integration approach?",
    "options": [
      "Use Salesforce APIs or MuleSoft to automate daily ERP-to-Salesforce inventory synchronization",
      "Export CSV files from ERP and manually import into Salesforce",
      "Use weekly email reports to reps",
      "Request manual stock updates during visits"
    ],
    "answer": 0,
    "explanation": "Overall explanation APIs or MuleSoft automate inventory updates, ensuring accuracy and timeliness. Manual imports, email reports, or rep updates create delays and increase error risk."
  },
  {
    "question": "A CPG company needs to provide external distribution partners with secure, controlled access to selected product and pricing data. What is the best solution?",
    "options": [
      "Use Experience Cloud with data sharing rules and APIs for real-time data access",
      "Provide direct database access to Salesforce",
      "Share weekly spreadsheets via email",
      "Use unsecured public links for data sharing",
    ],
    "answer": 0,
    "explanation": "Overall explanation Experience Cloud with APIs enables secure, role-based access, unlike direct DB access, email spreadsheets, or public links, which create security and compliance issues."
  },
  {
    "question": "A manager needs to integrate Salesforce orders with an external warehouse system for real-time order fulfillment. Which solution is recommended?",
    "options": [
      "Use real-time integration through middleware such as MuleSoft or external APIs",
      "Handle order processing manually and upload results monthly",
      "Export order data via reports and manually import into the warehouse system",
      "Use Chatter posts for warehouse notifications"
    ],
    "answer": 0,
    "explanation": "Overall explanation Middleware ensures seamless, automated order sync, unlike manual imports, monthly uploads, or unstructured Chatter notifications that lack automation and accuracy."
  },
  {
    "question": "A retail execution team wants to import new product data from the ERP weekly without requiring developer involvement. What is the best approach?",
    "options": [
      "Use Salesforce Data Loader or scheduled Data Import Wizard for weekly ERP data imports",
      "Request IT to manually create Apex integration scripts",
      "Use daily spreadsheets manually uploaded by business users",
      "Ask reps to manually enter new products"
    ],
    "answer": 0,
    "explanation": "Overall explanation Declarative tools like Data Loader allow non-developers to handle bulk imports efficiently. Apex scripting, manual uploads, or rep entry increase cost and errors."
  },
  {
    "question": "A sales director wants to combine Salesforce promotional execution data with BI insights from an external analytics platform. What integration is best?",
    "options": [
      "Perform manual data exports and combine them monthly in Excel",
      "Use Salesforce Reports only and ignore external BI data",
      "Use a connector or API integration to stream Salesforce data into the external analytics platform",
      "Ask reps to manually email promotion performance data"
    ],
    "answer": 2,
    "explanation": "Overall explanation API or connector-based integration provides real-time or near real-time analytics without manual intervention, unlike Excel exports, ignoring BI, or emailing data."
  },
  {
    "question": "A brand manager needs an integration that validates promotional pricing from Salesforce against ERP master data before approval. What’s the recommended solution?",
    "options": [
      "Build a manual approval checklist outside Salesforce",
      "Use platform events or APIs to validate promotional pricing against ERP master data during approval",
      "Rely on post-approval manual audits",
      "Track price mismatches in Excel"
    ],
    "answer": 1,
    "explanation": "Overall explanation Real-time validation via APIs/platform events ensures accurate pricing approval and avoids downstream errors. Manual checklists, audits, or Excel tracking are reactive and error-prone."
  },
  {
    "question": "A compliance officer wants all changes to financial terms on retail accounts to trigger an automated audit workflow in an external compliance system. How should this be implemented?",
    "options": [
      "Manually export changed records for compliance review",
      "Use scheduled weekly data jobs to capture changes",
      "Ignore automated audit needs and handle changes ad hoc",
      "Use Salesforce Platform Events to send changes in near real-time to the compliance system"
    ],
    "answer": 3,
    "explanation": "Overall explanation Platform Events deliver near real-time notifications of changes, unlike manual exports, weekly jobs, or ignoring automated compliance needs."
  },
  {
    "question": "A field operations team needs to integrate mobile field visit notes into Salesforce from a third-party app used by some reps. What is the best approach?",
    "options": [
      "Have reps copy and paste notes into Salesforce manually",
      "Use weekly CSV exports from the app",
      "Ignore third-party notes and only use Salesforce notes",
      "Use REST APIs to sync notes from the third-party app directly into Salesforce Visit records"
    ],
    "answer": 3,
    "explanation": "Overall explanation API-based sync ensures timely and structured data transfer, unlike manual entry, CSV exports, or ignoring external notes, which limit data quality and efficiency."
  },
  {
    "question": "A data team wants to consolidate daily sales data from Salesforce and an external retailer database for a combined performance dashboard. What is the best approach?",
    "options": [
      "Export data from both systems and merge manually in Excel",
      "Use middleware like MuleSoft or Tableau CRM connectors to combine Salesforce and external data in a centralized dashboard",
      "Capture external sales data manually in Salesforce",
      "Use periodic phone calls to update data"
    ],
    "answer": 1,
    "explanation": "Overall explanation Middleware or connectors automate data consolidation for accurate, timely dashboards, unlike manual Excel merges, manual capture, or phone updates."
  },
  {
    "question": "A company wants to pilot an AI-driven predictive replenishment integration in one region before scaling globally. What is the best configuration?",
    "options": [
      "Create a pilot-specific integration process limited to the selected region and monitor results",
      "Replace all replenishment processes globally with AI-driven integration immediately",
      "Track pilot outcomes manually using spreadsheets",
      "Add optional AI flags to existing replenishment workflows"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific integration allows controlled testing and measurement, unlike global rollouts, spreadsheet tracking, or optional fields that lack control and analytics clarity."
  },
  {
    "question": "A sales operations manager needs to track store visit completion rates daily and view them by territory. What is the best approach?",
    "options": [
      "Build a Salesforce Dashboard using visit completion reports segmented by territory",
      "Export visit data to Excel and manually pivot by territory",
      "Use weekly email updates from field reps",
      "Have territory managers track visits offline"
    ],
    "answer": 0,
    "explanation": "Overall explanation Native Salesforce dashboards allow real-time tracking with drill-down capabilities. Manual Excel pivots, emails, or offline tracking are reactive, lack automation, and increase the risk of errors."
  },
  {
    "question": "A retailer wants to view promotional compliance rates alongside sales lift for each campaign. How can Salesforce deliver this insight?",
    "options": [
      "Use a joined Salesforce Report combining Promotion Check compliance and Sales data",
      "Manually merge promotion and sales data in Excel",
      "Collect compliance data verbally from reps",
      "Only view sales numbers without compliance context"
    ],
    "answer": 0,
    "explanation": "Overall explanation Joined Reports allow correlation between promotion execution and sales lift directly within Salesforce. Excel merging, verbal updates, or ignoring compliance context are inefficient and incomplete."
  },
  {
    "question": "A company wants to identify underperforming stores based on KPIs such as on-shelf availability (OSA), visit frequency, and sales volume. What’s the best approach?",
    "options": [
      "Export KPI data to spreadsheets and manually filter underperforming stores",
      "Use scheduled emails from territory reps to highlight problem stores",
      "Build an Analytics Dashboard using KPI reports with conditional formatting and filters",
      "Review store performance once per quarter manually"
    ],
    "answer": 2,
    "explanation": "Overall explanation Dashboards with KPI reports deliver real-time insight and filtering for underperforming stores, unlike spreadsheets, emails, or infrequent manual reviews that limit proactive response."
  },
  {
    "question": "A field manager wants to analyze rep productivity, including total visits completed and average visit duration per day. How can Salesforce provide this?",
    "options": [
      "Your answer is incorrect",
      "Use standard reports and build a dashboard chart tracking rep visits and average duration",
      "Manually collect productivity information via calls and emails",
      "Export visit logs into Excel and compute durations manually",
      "Rely on anecdotal productivity reports from reps"
    ],
    "answer": 0,
    "explanation": "Overall explanation Standard reports with calculated fields provide instant, accurate productivity analytics. Manual calls, Excel exports, or anecdotal feedback lack reliability and real-time capability."
  },
  {
    "question": "A merchandising director wants to compare shelf share metrics from Planogram Checks against actual sales data to measure planogram effectiveness. What is the best solution?",
    "options": [
      "Focus only on sales data and ignore shelf share metrics",
      "Use manual analysis outside Salesforce using offline tools",
      "Create combined Analytics Dashboards leveraging Planogram Check data and sales performance data",
      "Only track shelf share visually without reporting",
      "Overall explanation",
      "Combined dashboards enable correlation between shelf share and sales, ensuring actionable insights. Ignoring shelf share, manual offline analysis, or purely visual checks limit decision-making power.",
      "A brand manager wants to receive automatic alerts when any store falls below a compliance threshold of 80% for promotion execution. What’s the best configuration?",
      "Your answer is incorrect",
      "Configure dashboard subscriptions or report-based alerts triggered at threshold breaches",
      "Require manual daily checks of compliance reports",
      "Depend on rep phone calls for compliance updates",
      "Review compliance only at month-end meetings"
    ],
    "answer": 0,
    "explanation": "Overall explanation Automated alerts provide proactive compliance management, unlike manual checks, phone calls, or delayed month-end reviews that risk delayed corrective actions."
  },
  {
    "question": "A company wants to analyze field sales performance geographically, including map-based visualization of KPIs. How can Salesforce support this?",
    "options": [
      "Use basic list views for territory performance",
      "Rely on static PowerPoint slides for geography-based performance",
      "Export data to third-party mapping software",
      "Leverage Salesforce Maps with performance KPIs for interactive geographic visualization"
    ],
    "answer": 3,
    "explanation": "Overall explanation Salesforce Maps provides interactive, native geographic analytics, unlike static lists, PowerPoint slides, or disconnected mapping software."
  },
  {
    "question": "A national chain wants to track promotion ROI by region, comparing investment costs versus incremental sales from specific campaigns. What is the best solution?",
    "options": [
      "Use Excel models outside Salesforce to calculate ROI",
      "Create static monthly PDF ROI reports",
      "Ignore promotion ROI and focus only on raw sales numbers",
      "Build ROI Analytics Dashboards combining campaign cost data and incremental sales"
    ],
    "answer": 1,
    "explanation": "Overall explanation Native ROI dashboards allow automated, repeatable analysis, unlike Excel models, static PDFs, or ignoring ROI altogether, which reduces agility and decision accuracy."
  },
  {
    "question": "A VP of sales wants to know which product categories are most frequently associated with out-of-stock issues and analyze trends over time. What’s the best configuration?",
    "options": [
      "Export product stock data into spreadsheets for manual categorization",
      "Use a Salesforce report grouped by product category with trend charts on stock-out incidents",
      "Request reps to provide qualitative notes on OOS issues",
      "Check OOS data once annually"
    ],
    "answer": 1,
    "explanation": "Overall explanation Grouped Salesforce reports with trend charts provide automated, category-level OOS insights, unlike spreadsheets, anecdotal notes, or infrequent reviews."
  },
  {
    "question": "A retailer wants to pilot an “AI-Powered Predictive Analytics Dashboard” in one region before rolling out company-wide. What’s the best configuration?",
    "options": [
      "Create a dedicated pilot dashboard limited to the selected region and monitor performance",
      "Replace all dashboards with AI-powered analytics immediately",
      "Track predictive metrics manually via spreadsheets",
      "Add AI results as optional notes in visit reports"
    ],
    "answer": 0,
    "explanation": "Overall explanation A pilot-specific dashboard isolates testing and validates performance without disrupting global analytics, unlike full rollouts, spreadsheets, or optional notes that limit structured analysis."
  },
  {
    "question": "A sales rep needs to ensure accurate stock counts while visiting multiple retail stores with limited connectivity. What are the best solutions?",
    "options": [
      "Use offline-capable inventory check in the mobile app",
      "Rely on paper-based logs for stock recording",
      "Enable barcode scanning for product identification",
      "Sync inventory data after reconnecting to the network"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Overall explanation Offline inventory checks ensure functionality without network issues, and syncing later maintains data accuracy. Paper logs are error-prone, and lack of product scanning increases mistakes."
  },
  {
    "question": "A company wants to automate restocking suggestions when inventory falls below predefined thresholds during visits. Which configurations should be enabled?",
    "options": [
      "Use threshold-based inventory alerts",
      "Allow manual review by store managers only",
      "Automate order creation suggestions",
      "Skip automation and let reps decide quantities"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Automated alerts and order suggestions minimize stockouts and streamline decisions. Relying solely on manual reviews or skipping automation risks missed replenishment."
  },
  {
    "question": "A manager wants real-time analytics on inventory trends collected during store visits. Which features should be implemented?",
    "options": [
      "Integrate inventory check data with analytics dashboards",
      "Capture product expiration dates during checks",
      "Depend on monthly manual consolidation of paper logs",
      "Use predictive analytics to forecast inventory needs"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Overall explanation Analytics integration and predictive forecasting improve strategic planning. Manual consolidation delays insights, and ignoring predictive trends prevents proactive replenishment."
  },
  {
    "question": "A CPG field team must verify planogram compliance and inventory availability simultaneously. Which capabilities are required?",
    "options": [
      "Use planogram compliance tasks linked with inventory check",
      "Add photo capture for missing items",
      "Conduct separate manual planogram and inventory visits",
      "Ignore product facings during inventory check"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Combining compliance tasks with inventory checks and photo evidence ensures accuracy. Separate visits waste time, and ignoring facings creates data gaps."
  },
  {
    "question": "A business wants to reduce rep workload by automating data entry during inventory checks. Which features are most effective?",
    "options": [
      "Use barcode scanning for faster product identification",
      "Implement voice-to-text notes for stock issues",
      "Keep manual tally sheets as backup",
      "Skip digital solutions to save cost"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Barcode scanning and voice-to-text reduce manual effort and increase accuracy. Tally sheets and ignoring digital solutions are outdated and error-prone."
  },
  {
    "question": "A regional head wants visibility of near-expiry products while capturing inventory data. What should be configured?",
    "options": [
      "Add expiration date fields to inventory check tasks",
      "Enable automatic alerts for products expiring soon",
      "Check expiry dates only at warehouse level",
      "Leave expiry checks to store staff"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Capturing expiry information in-field and triggering alerts helps prevent product waste. Warehouse-only checks or relying on store staff creates delays and compliance risks."
  },
  {
    "question": "A CPG distributor needs inventory data to adjust delivery routes dynamically during the day. Which capabilities should be enabled?",
    "options": [
      "Real-time sync of inventory data with logistics",
      "Driver notifications for urgent stock replenishment",
      "Manually plan routes after daily visits",
      "Ignore stockouts until next scheduled visit"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Real-time syncing and driver notifications enable agile routing. Manual planning or ignoring stockouts leads to lost sales opportunities and inefficient routing."
  },
  {
    "question": "A company wants to ensure reps capture competitive product inventory levels during visits. Which actions support this goal?",
    "options": [
      "Add competitive product fields to inventory tasks",
      "Automate competitive product reporting to analytics",
      "Rely solely on rep memory for competitor data",
      "Handle competitor checks only quarterly"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Dedicated fields and automated analytics ensure accurate and timely competitor intelligence. Memory-based or infrequent checks provide incomplete data."
  },
  {
    "question": "A retailer requests automated stock discrepancy detection between recorded and actual inventory. How can Salesforce support this?",
    "options": [
      "Use discrepancy detection logic in inventory tasks",
      "Notify reps of mismatched quantities in real time",
      "Manually check discrepancies after visits",
      "Wait for quarterly audits to reconcile inventory"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Discrepancy detection and instant notifications allow immediate issue resolution. Manual or quarterly checks delay corrective action."
  },
  {
    "question": "A sales manager wants to minimize training time for new reps performing inventory checks. What solutions help?",
    "options": [
      "Provide guided inventory workflows in the mobile app",
      "Create quick-reference job aids within Salesforce",
      "Train exclusively through lengthy classroom sessions",
      "Let new reps learn directly from senior reps only"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Guided workflows and embedded aids reduce onboarding time and errors. Solely relying on classroom sessions or peer learning lacks standardization and slows productivity."
  },
  {
    "question": "A retailer wants to ensure planogram compliance during every store visit while minimizing manual reporting by reps. Which solutions are best?",
    "options": [
      "Create manual planogram checklists in Excel",
      "Configure guided planogram check workflows in the mobile app",
      "Use automated photo capture linked to planogram tasks",
      "Leverage AI-driven image recognition for shelf compliance"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation AI-driven image recognition and automated photo capture reduce manual effort and provide objective compliance data, unlike Excel-based manual checklists which are error-prone and time-consuming."
  },
  {
    "question": "A CPG brand wants to track planogram non-compliance issues and automatically generate corrective tasks. Which features are required?",
    "options": [
      "Use manual escalation via email",
      "Automate task creation for non-compliant SKUs",
      "Link planogram check results with store-level task queues",
      "Collect compliance data quarterly only"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "Overall explanation Linking check results with task queues and automated escalation ensures faster resolution. Manual emails and quarterly checks cause delays and inaccurate reporting."
  },
  {
    "question": "A manager wants to ensure accurate compliance data by capturing evidence when products are misplaced or missing. Which steps should be taken?",
    "options": [
      "Train reps to rely on memory for compliance",
      "Implement mandatory photo capture for all flagged items",
      "Use discrepancy reasons in planogram tasks",
      "Skip capturing non-compliance if it’s minor"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "Overall explanation Capturing photos and logging reasons improves accountability and accuracy. Memory reliance and skipping issues compromise reporting integrity."
  },
  {
    "question": "A brand owner wants real-time planogram compliance data integrated with analytics dashboards for immediate insights. Which actions meet the requirement?",
    "options": [
      "Aggregate data weekly using spreadsheets",
      "Sync planogram check data with Salesforce analytics in real time",
      "Use store Wi-Fi for photo uploads only at day end",
      "Enable automated compliance scoring and dashboards"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "Overall explanation Real-time data sync and automated compliance scoring enable quick action. Weekly spreadsheets and delayed photo uploads prevent timely insights and responses."
  },
  {
    "question": "A company wants to reduce visit time while still performing full planogram compliance checks. Which solutions are ideal?",
    "options": [
      "Implement barcode scanning for shelf product validation",
      "Use AR-based guided shelf compliance tools",
      "Perform compliance manually without digital support",
      "Focus checks only on top-selling SKUs"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation AR-guided compliance and barcode scanning speed up visits without compromising accuracy. Manual-only checks or focusing only on top SKUs reduce efficiency and data completeness."
  },
  {
    "question": "A field team needs to verify promotional end-cap compliance and adjust for regional planogram variations. Which capabilities are most useful?",
    "options": [
      "Enable location-specific planogram templates",
      "Manually compare all store layouts after visits",
      "Add promotional fixture validation tasks",
      "Wait until promotions end to review compliance"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Overall explanation Location-specific templates and promotional fixture tasks ensure regionally accurate and timely compliance checks. Manual comparisons and post-promotion reviews lack operational agility."
  },
  {
    "question": "A CPG company wants to automate discrepancy reporting when products don’t match planogram positions. Which features should be used?",
    "options": [
      "Enable discrepancy reason codes",
      "Trigger automated corrective workflows",
      "Train reps to resolve issues manually on the spot only",
      "Postpone reporting until weekly meetings"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Automated workflows and reason codes allow structured data capture and fast issue resolution. Manual handling and delayed reporting create inefficiencies and risk missing compliance targets."
  },
  {
    "question": "A sales director wants to integrate planogram compliance with incentive programs for reps. Which configurations are necessary?",
    "options": [
      "Track rep compliance completion rate",
      "Apply incentive rules based on compliance scores",
      "Reward all reps equally regardless of compliance",
      "Measure compliance only yearly"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Linking compliance results to incentives motivates reps to prioritize execution. Equal rewards or annual-only tracking does not drive consistent behavior."
  },
  {
    "question": "A brand needs to detect unauthorized competitor placements on shelves. What configuration should be implemented?",
    "options": [
      "Require photo capture of all shelf sections",
      "Automate competitor tag detection via image recognition",
      "Depend on verbal reporting from store staff",
      "Ignore competitor activity during visits"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Automated competitor detection and photo documentation provide reliable insights. Verbal reporting or ignoring activity misses critical competitive intelligence."
  },
  {
    "question": "A company wants to validate seasonal planogram layouts in real time and ensure they are updated for each season change. Which solutions are needed?",
    "options": [
      "Use seasonal planogram versions in Salesforce",
      "Schedule compliance tasks linked to seasonal SKUs",
      "Review seasonal layouts only once per year",
      "Allow reps to skip seasonal validation"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Overall explanation Seasonal planogram versions and tasks ensure timely compliance validation. Skipping seasonal checks or limiting reviews to annual cycles risks execution gaps and lost sales opportunities."
  }
];
