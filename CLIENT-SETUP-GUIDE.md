# Client Setup Guide

Step-by-step guide to setting up a new client portal using the ALIAS HQ template.

## 🚀 Quick Setup (5 Minutes)

### Step 1: Access Settings

1. Navigate to your portal at `http://localhost:5173` (or your deployed URL)
2. Click on **Settings** in the sidebar (bottom of SUPPORT section)
3. You'll see 5 tabs: Branding, Client Data, Modules, Navigation, Export

### Step 2: Configure Branding

**In the Branding tab:**

1. **Company Name**: Enter your client's company name
   - Example: "Acme Corporation"
   
2. **Tagline**: Enter a descriptive tagline
   - Example: "Leading Innovation in Digital Commerce"
   
3. **Custom Logo URL** (Optional): 
   - Upload your logo to a hosting service
   - Paste the URL here
   - Or leave empty to use the letter logo
   
4. **Preview**: Check the logo preview at the bottom
5. Click **Save Changes**

### Step 3: Configure Modules

**In the Modules tab:**

1. Toggle each module category on/off based on your needs:
   - ✅ **Research** - Client intelligence and analysis
   - ✅ **ALIAS HQ Modules** - Tools and dashboards
   - ⬜ **Business Units** - Department sections (optional)
   - ✅ **Concepts** - Project ideas and proposals

2. Customize category labels if needed:
   - Change "RESEARCH" to "CLIENT INTELLIGENCE"
   - Change "ALIAS HQ MODULES" to "TOOLS"
   - etc.

3. Click **Save Changes**

### Step 4: Export Configuration

**In the Export tab:**

1. Click **Export Configuration**
2. Save the JSON file to your project
3. Commit to version control for team collaboration

**Done!** Your portal is now branded and configured.

## 🎨 Advanced Setup

### Custom Logo Setup

#### Option A: External Hosting
```
1. Upload logo to Imgur, Cloudinary, or your CDN
2. Get direct image URL (must end in .png, .jpg, or .svg)
3. Paste in Settings → Branding → Custom Logo URL
4. Save changes
```

#### Option B: Project Assets (Recommended for Production)
```
1. Place logo in `public/logo.png`
2. Use URL: `/logo.png` in Settings
3. Build and deploy normally
```

### Custom Colors (Coming Soon)

Currently uses default purple theme. To customize:

Edit `src/config/defaultConfig.ts`:
```typescript
branding: {
  primaryColor: '#3B82F6',  // Blue
  accentColor: '#10B981'    // Green
}
```

### Module Customization

#### Hiding Specific Pages

To hide individual navigation items (not just categories):

1. Edit `src/config/defaultConfig.ts`
2. Remove unwanted items from the `navigation` array
3. Or set `enabled: false` in the corresponding module

Example:
```typescript
// Hide "Concept 1" but keep other concepts
navigation: [
  // Remove this line:
  // { id: 'concept-1', name: 'Concept 1', path: '/concept-1', icon: 'Lightbulb', category: 'concepts' },
  
  // Keep others:
  { id: 'concept-2', name: 'Concept 2', path: '/concept-2', icon: 'Lightbulb', category: 'concepts' },
  // ...
]
```

## 📊 Client Data Setup

### Adding Client Research Data

1. **Copy Template**
   ```bash
   cp src/data/clients/eclatOS.ts src/data/clients/your-client.ts
   ```

2. **Edit Profile**
   Open `src/data/clients/your-client.ts` and update:
   ```typescript
   export const yourClientProfile: ResearchProfile = {
     companyProfile: {
       clientName: "Your Client Name",
       foundingDate: "2020",
       // ... update all fields
     },
     // ... update leadership, opportunities
   };
   ```

3. **Register Client**
   Edit `src/data/clients/index.ts`:
   ```typescript
   import { yourClientProfile } from './your-client';
   
   export const clientProfiles: Record<string, ResearchProfile> = {
     'your-client': yourClientProfile,
     'eclat-os': eclatOSProfile,
   };
   ```

4. **Update Active Client**
   In Settings → Client Data or in `src/config/clientConfig.ts`:
   ```typescript
   activeClientId: 'your-client'
   ```

## 🚢 Deployment Checklist

### Pre-Deployment

- [ ] Configure branding (company name, tagline, logo)
- [ ] Enable/disable modules as needed
- [ ] Add client research data
- [ ] Export and commit configuration to git
- [ ] Test all navigation items
- [ ] Verify responsive design on mobile
- [ ] Check all enabled pages render correctly

### Deployment Steps

#### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Configure portal for [Client Name]"
   git push
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Vite
   - Click Deploy

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

#### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod
   ```

#### Manual Deployment

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to your hosting (S3, etc.)

### Post-Deployment

- [ ] Test live URL
- [ ] Verify logo displays correctly
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Share portal URL with client

## 🔄 Multi-Client Setup

### Managing Multiple Clients

For agencies managing multiple client portals:

#### Option 1: Separate Deployments (Recommended)
```
- client-a.youragency.com (Vercel deployment 1)
- client-b.youragency.com (Vercel deployment 2)
- client-c.youragency.com (Vercel deployment 3)
```

Each deployment uses a different config:
1. Create git branch per client
2. Configure settings for each client
3. Deploy each branch to different Vercel project

#### Option 2: Single Deployment with Domain Routing

1. **Configure by Domain**
   Edit `src/config/clientConfig.ts`:
   ```typescript
   export const loadClientConfig = (): ClientConfig => {
     const hostname = window.location.hostname;
     
     if (hostname.includes('client-a.com')) {
       return clientAConfig;
     } else if (hostname.includes('client-b.com')) {
       return clientBConfig;
     }
     
     return defaultConfig;
   };
   ```

2. **Create Config Files**
   ```
   src/config/
   ├── clientA.config.ts
   ├── clientB.config.ts
   ├── clientC.config.ts
   └── clientConfig.ts (routes to correct config)
   ```

#### Option 3: URL Parameter
```
https://portal.youragency.com?client=acme
https://portal.youragency.com?client=techcorp
```

Detect with:
```typescript
const urlParams = new URLSearchParams(window.location.search);
const clientId = urlParams.get('client') || 'default';
```

## 🎯 Common Scenarios

### Scenario 1: Real Estate Agency

**Modules to Enable:**
- ✅ Research (property analysis)
- ✅ ALIAS HQ Modules (analytics dashboards)
- ⬜ Business Units (not needed)
- ✅ Concepts (property concepts)

**Custom Labels:**
- Research → "PROPERTY INTELLIGENCE"
- ALIAS HQ Modules → "DASHBOARDS"
- Concepts → "DEVELOPMENT IDEAS"

### Scenario 2: Tech Consulting

**Modules to Enable:**
- ✅ Research (client tech stack)
- ✅ ALIAS HQ Modules (project tools)
- ✅ Business Units (tech divisions)
- ✅ Concepts (solution proposals)

**Custom Labels:**
- Research → "TECH ASSESSMENT"
- ALIAS HQ Modules → "PROJECT TOOLS"
- Business Units → "PRACTICE AREAS"
- Concepts → "SOLUTION PROPOSALS"

### Scenario 3: Marketing Agency

**Modules to Enable:**
- ✅ Research (market analysis)
- ✅ ALIAS HQ Modules (campaign dashboards)
- ⬜ Business Units (not needed)
- ✅ Concepts (campaign concepts)

**Custom Labels:**
- Research → "MARKET INSIGHTS"
- ALIAS HQ Modules → "CAMPAIGN TOOLS"
- Concepts → "CREATIVE CONCEPTS"

## 🐛 Troubleshooting

### Logo Not Showing

**Problem**: Custom logo doesn't appear

**Solutions**:
1. Check URL is accessible (open in new tab)
2. Verify image format (PNG, JPG, SVG)
3. Check for CORS issues (hosting must allow cross-origin)
4. Try using `/logo.png` (place in `public/` folder)

### Config Not Saving

**Problem**: Changes don't persist after refresh

**Solutions**:
1. Check browser console for errors
2. Clear localStorage: `localStorage.clear()`
3. Verify Settings page is loaded correctly
4. Try exporting and re-importing config

### Module Not Appearing

**Problem**: Enabled module doesn't show in sidebar

**Solutions**:
1. Verify `enabled: true` in Modules tab
2. Check navigation items have correct `category`
3. Hard refresh browser (Ctrl+Shift+R)
4. Check console for errors

### Broken After Deployment

**Problem**: Works locally but not after deployment

**Solutions**:
1. Check build logs for errors
2. Verify all environment variables set
3. Check asset URLs are absolute or relative correctly
4. Test with `npm run build && npm run preview` locally

## 📞 Support

### Getting Help

1. **Check Documentation**
   - [README-TEMPLATE.md](./README-TEMPLATE.md)
   - [CONFIGURATION-GUIDE.md](./CONFIGURATION-GUIDE.md)

2. **Common Issues**
   - Search existing GitHub issues
   - Check browser console for errors
   
3. **Report Issues**
   - Provide config JSON (via Export)
   - Include browser console errors
   - Describe expected vs actual behavior

## ✅ Setup Checklist

Use this checklist for each new client:

### Initial Setup
- [ ] Access Settings page
- [ ] Configure company name
- [ ] Configure tagline
- [ ] Upload/add logo (if applicable)
- [ ] Save branding changes

### Module Configuration
- [ ] Review all module categories
- [ ] Enable needed modules
- [ ] Disable unused modules
- [ ] Customize category labels
- [ ] Save module configuration

### Client Data
- [ ] Create client profile file
- [ ] Populate company data
- [ ] Add leadership profiles
- [ ] Document automation opportunities
- [ ] Link to active configuration

### Testing
- [ ] Test home page displays correctly
- [ ] Verify sidebar navigation
- [ ] Check all enabled pages load
- [ ] Test responsive design
- [ ] Verify voice assistant works

### Export & Deploy
- [ ] Export configuration JSON
- [ ] Commit to version control
- [ ] Deploy to hosting platform
- [ ] Test live deployment
- [ ] Configure custom domain (if applicable)

### Client Handoff
- [ ] Share portal URL
- [ ] Provide login credentials (when auth added)
- [ ] Document any custom features
- [ ] Schedule training session

---

**Congratulations!** Your client portal is ready to use. 🎉
